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


});
