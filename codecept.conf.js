const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// modo headless com HEADLESS=true (npm run test:headless)
setHeadlessWhen(process.env.HEADLESS);

// plugins comuns: screenshotOnFail, retryFailedStep etc.
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'codeceptjs-webdriver',
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://automationpratice.com.br',
      browser: 'chrome',
      windowSize: '1280x1024',
      waitForTimeout: 10000,
    },
  },
  include: {
    I: './steps_file.js',
    home_page: './pages/home_page.js',
    login_page: './pages/login_page.js',
    create_user_page: './pages/create_user_page.js',
  },
};
