const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    reportFilename: '[name].html',
    overwrite: true,
    html: true,
    json: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      
      on('file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );

      preprocessor.addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: '**/*.feature',
    video: true,
    videoCompression: 32,
  },
});
