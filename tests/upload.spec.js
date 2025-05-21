import { test, expect } from '@playwright/test';
import path from 'path';
import { UploadPage } from '../pages/UploadPage';

test.describe('File Upload Tests', () => {
    let uploadPage;

    test.beforeEach(async ({ page }) => {
        uploadPage = new UploadPage(page);
        await uploadPage.goto();
    });

    test('should upload a file successfully', async () => {
        const filePath = path.join(__dirname, '../fixtures/sample.txt');
        await uploadPage.uploadFile(filePath);
        
        expect(await uploadPage.verifyUploadSuccess()).toBeTruthy();
        expect(await uploadPage.getUploadedFileName()).toContain('sample.txt');
    });

    test('should show drag and drop area', async () => {
        expect(await uploadPage.isDragDropAreaVisible()).toBeTruthy();
    });

    test('should show error when submitting without file', async () => {
        await uploadPage.uploadWithoutFile();
        const errorMessage = await uploadPage.verifyInternalServerError();
        expect(errorMessage).toBe('Internal Server Error');
    });
    test('should upload PDF file successfully', async () => {
        const filePath = path.join(__dirname, '../fixtures/sample.pdf');
        await uploadPage.uploadFile(filePath);
        
        expect(await uploadPage.verifyUploadSuccess()).toBeTruthy();
        expect(await uploadPage.getUploadedFileName()).toContain('sample.pdf');
    });

    test('should upload image file successfully', async () => {
        const filePath = path.join(__dirname, '../fixtures/test-image.jpg');
        await uploadPage.uploadFile(filePath);
        
        expect(await uploadPage.verifyUploadSuccess()).toBeTruthy();
        expect(await uploadPage.getUploadedFileName()).toContain('test-image.jpg');
    });

    test('should upload large file successfully', async () => {
        const filePath = path.join(__dirname, '../fixtures/5mb.zip');
        await uploadPage.uploadFile(filePath);
        
        expect(await uploadPage.verifyUploadSuccess()).toBeTruthy();
        expect(await uploadPage.getUploadedFileName()).toContain('5mb.zip');
    });

    test('should handle multiple file uploads sequentially', async () => {
        const files = [
            path.join(__dirname, '../fixtures/sample.txt'),
            path.join(__dirname, '../fixtures/test-image.jpg'),
            path.join(__dirname, '../fixtures/sample.pdf')
        ];

        for (const file of files) {
            await uploadPage.uploadFile(file);
            expect(await uploadPage.verifyUploadSuccess()).toBeTruthy();
            expect(await uploadPage.getUploadedFileName()).toContain(path.basename(file));
            await uploadPage.goto(); // Reset for next upload
        }
    });
});
