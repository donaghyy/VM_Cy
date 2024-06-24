import { Given, When, Then, Before, After } from '@badeball/cypress-cucumber-preprocessor'

Before(() => {
  cy.log('Test Setup')
})

After(() => {
  cy.log('Test Teardown')
})

