const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");


module.exports = defineConfig({
  projectId: "zg5hgj",
  allowCypressEnv: true,
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
  //--Tambahkan Baris ini ke dalam Kode--
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: true,
    },
   //------------------------------------
    baseUrl: 'https://www.saucedemo.com',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config); //--> Tambahkan ini
      return config; //--> Tambahkan ini
    },
  },
});
