export class UploadPage {
    constructor(page) {
        this.page = page;
        this.fileInput = '#file-upload';
        this.uploadButton = '#file-submit';
        this.uploadedFiles = '#uploaded-files';
        this.successMessage = '.example h3';
        this.dragDropArea = '#drag-drop-upload';
        this.serverErrorHeading = 'h1';

    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/upload');
    }

    async uploadFile(filePath) {
        await this.page.setInputFiles(this.fileInput, filePath);
        await this.page.click(this.uploadButton);
    }

    async verifyUploadSuccess() {
        await this.page.waitForSelector(this.uploadedFiles);
        const successText = await this.page.locator(this.successMessage).textContent();
        return successText === 'File Uploaded!';
    }

    async getUploadedFileName() {
        return await this.page.locator(this.uploadedFiles).textContent();
    }

    async isDragDropAreaVisible() {
        return await this.page.locator(this.dragDropArea).isVisible();
    }

   async verifyInternalServerError() {
        return await this.page.locator(this.serverErrorHeading).textContent();
    }


    async uploadWithoutFile() {
        await this.page.click(this.uploadButton);
    }
}
