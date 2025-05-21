# File Upload Test Automation with Playwright

This project demonstrates automated testing of file upload functionality using Playwright, implementing the Page Object Model pattern, and running tests through GitHub Actions.

## 🚀 Project Structure

```
playwright/
├── .github/
│   └── workflows/
│       └── playwright.yml    # GitHub Actions workflow
├── fixtures/
│   ├── sample.txt           # Test text file
│   ├── sample.pdf           # Test PDF file
│   ├── test-image.jpg       # Test image file
│   ├── 5mb.zip             # Large file test
│   └── large-file.txt      # Another large file test
├── pages/
│   └── UploadPage.js       # Page Object for upload functionality
├── tests/
│   └── upload.spec.js      # Test specifications
├── playwright.config.js     # Playwright configuration
└── package.json            # Project dependencies
```

## 🛠️ Technologies & Patterns

### Page Object Model (POM)
- Implements POM design pattern for better maintainability
- Separates test logic from page interactions
- Located in `pages/UploadPage.js`

### Playwright Framework
- Uses `@playwright/test` for robust web testing
- Supports multiple browsers (Chromium, Firefox, WebKit)
- Handles file uploads and assertions efficiently

### GitHub Actions Integration
- Automated CI/CD pipeline
- Runs tests on push and pull requests
- Uploads test reports as artifacts
- Configured in `.github/workflows/playwright.yml`

## 📁 Test Data Management

### Fixtures
Various test files in the `fixtures/` directory:
- Text files for basic upload testing
- PDF files for document upload testing
- Image files for media upload testing
- Large files for size limit testing

## 🧪 Test Cases

The test suite (`upload.spec.js`) includes:
1. Basic file upload verification
2. Drag and drop functionality
3. Error handling for empty submissions
4. Multiple file format support:
   - Text files
   - PDF documents
   - Image files
   - Large files
5. Sequential multiple file uploads

## 🚀 Getting Started

### Prerequisites
- Node.js (LTS version)
- npm

### Installation
```bash
# Clone the repository
git clone https://github.com/Asmar2000/playwright.git

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Running Tests
```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test upload.spec.js

# Run tests in headed mode
npx playwright test --headed

# Run tests in specific browser
npx playwright test --project=chromium
```

## 📊 Test Reports

- HTML reports are generated after each test run
- Reports are automatically uploaded to GitHub Actions artifacts
- Available for 30 days after the workflow run

## 🔄 Continuous Integration

GitHub Actions workflow includes:
- Automated test execution on push/PR
- Node.js setup and dependency installation
- Playwright browser installation
- Test execution across multiple browsers
- Report artifact upload

## 🧰 Project Configuration

The `playwright.config.js` includes:
- Parallel test execution
- Retry logic for CI environment
- Browser configurations
- Trace capture on test failure
- HTML reporter setup

## 📝 Best Practices Implemented

1. Page Object Model for maintainable code
2. Fixture-based test data management
3. Comprehensive test coverage
4. Clean and modular test structure
5. Efficient CI/CD pipeline
6. Error handling and assertions
7. Cross-browser testing support
