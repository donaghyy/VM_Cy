import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import Homepage from '../page_objects/homePage';

const homePage = new Homepage();


Given('user navigates to {string}', (url) => {
    cy.visit(url);
    homePage.getAcceptCookiesBtn().click()
})

Given('user is on the homepage', () => {
    homePage.getHeadingTitle().should('be.visible')
})

Given('user sees the postcode textbox', () => {
    homePage.getPostCodeInput().should('exist').click()
})

When('user clicks the Check availability button' , () => {
   homePage.getCheckAvailabilityBtn().click()
})

Then('user sees the validation error displayed', () => {
  homePage.getPostCodeInputValidationError().should('exist').should('be.visible')
})

When('user expands Broadband deals from the nav menu', () => {
    homePage.getBroadbandDealsNavMain().should('exist').realHover()
})

Given('user clicks {string} link', (link) => {
    homePage.clickNavlink(link)
})

Given('user sees {string} link, which goes to {string}', (link, path) => {
    homePage.returnNavLink(link).should('have.attr', 'href').and('include', path)
    
//     // Below code works when replacing url with string, not dynamically grabbing url from elements href.
//     // Build seperate methods for each external link if time allows
//     var url = homePage.returnNavLink(link).invoke('attr', 'href')
//     cy.origin(url, { args: { path } }, ({ path }) => {   
//         cy.visit('/', {timeout: 10000})
//         cy.url().should('contain', path)
//         cy.go('back');
//     }
//   );

})

Then('user validates that they are navigated to the {string} page', (path) => {
    cy.url().should('contain', path)
    cy.go('back');
})

When('user expands Mobile deals from the nav menu', () => {
    homePage.getMobileDealsNavMain().should('exist').realHover()
})

When('user clicks Help from the nav menu', () => {
    homePage.getHelpNavMain().should('exist').click()
})

When('user types {string} into the postcode textbox', (postCode) => {
    homePage.getPostCodeInput().type(postCode)
})

Given('user clicks Check availability button' , () => {
    homePage.getCheckAvailabilityBtn().click()
 })

 Given('user clicks Check availability button in flow' , () => {
    homePage.getCheckAvailabilityBtn2().click()
 })

Given('user selects an address', () => {
    homePage.getAddressSelector().click()
})

Then('user sees success message is displayed', () => {
    homePage.getServiceAvailabile().should('exist').should('be.visible')
})

Then('user is navigated to the Keep me posted page', () => {
    cy.get('.type--size-T900',{ timeout: 20000 }).should('be.visible')
    cy.url().should('contain', 'keep-me-posted')
})

When('user clicks Help and support icon', () => {
    homePage.getHelpAndSupportIcon().should('be.visible')
    .click()
})

Then('user is navigated to the {string} page', (path) => {
    cy.url().should('contain', path)
    cy.go('back')
})

When('user clicks My Virgin Media icon', () => {
    homePage.getMyVirginMediaIcon().should('be.visible')
    .click()
})

When('user clicks Live chat icon', () => {
    homePage.getLiveChatIcon().should('be.visible')
    .click()
})

When('user clicks Network coverage icon', () => {
    homePage.getNetworkCoverageIcon().should('be.visible')
    .click()
})

When('user clicks Blog icon', () => {
    homePage.getBlogIcon().should('be.visible')
    .click()
})

When('user clicks Broadband only icon', () => {
    homePage.getBroadbandOnlyIcon().should('be.visible')
    .click()
})

When('user clicks Broadband deals icon', () => {
    homePage.getBroadbandDealsIcon().should('be.visible')
    .click()
})

When('user clicks Broadband and phone icon', () => {
    homePage.getBroadbandAndPhoneIcon().should('be.visible')
    .click()
})

When('user clicks TV, Broadband and phone icon', () => {
    homePage.getTvBroadbandAndPhoneIcon().should('be.visible')
    .click()
})

When('user clicks O2 Customer deals icon', () => {
    homePage.getO2CustomerDealsIcon().should('be.visible')
    .click()
})

When('user expands Broadband section', () => {
    homePage.getLegalBroadbandSection().should('be.visible')
    .click()
})

Then('user sees Broadband section has been expanded', () => {
    homePage.getLegalBroadbandSectionProof().should('be.visible')
})

When('user expands Offers section', () => {
    homePage.getLegalBroadbandSection().should('be.visible')
    .click() // minimise the previous section
    homePage.getLegalOffersSection().should('be.visible')
    .click()
})

Then('user sees Offers section has been expanded', () => {
    homePage.getLegalOffersSectionProof().should('be.visible')
})

When('user expands O2 Priority section', () => {
    homePage.getLegalOffersSection().should('be.visible')
    .click() // minimise the previous section
    homePage.getLegalO2PrioritySections().should('be.visible')
    .click()
})

Then('user sees O2 Priority section has been expanded', () => {
    homePage.getLegalO2PrioritySectionsProof().should('be.visible')
})

When('user clicks {string} Footer link', (link) => {
    homePage.clickFooterlink(link)
})

When('user opens the homepage on a desktop', () => {
    cy.viewport('macbook-15');
})
  
When('user opens the homepage on a tablet', () => {
    cy.viewport('ipad-2');
})
  
  When('user opens the homepage on a mobile', () => {
    cy.viewport('iphone-6');
})

Then('the layout should adapt correctly', () => {
    cy.get('body').should('be.visible');
})

When('user analyzes the page using an accessibility testing tool', () => {
    cy.injectAxe();
    cy.checkA11y();
})

Then('the homepage should have no major accessibility issues', () => {
    cy.checkA11y(null, {
        rules: {
        'major': { enabled: true }
        }
    })
})

Then('the page should comply with WCAG 2.1 standards', () => {
    cy.checkA11y(null, {
        runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa']
        }
    })
})

When('user clicks Account from the nav menu', () => {
    homePage.getUserAccountBtn().should('be.visible').click()
})

When('user clicks Sign in to my Virgin Media button', () => {
    homePage.getSignInVMBtn().should('be.visible').click()
})

When('user clicks Sign in via email button', () => {
    homePage.getUserAccountBtn().should('be.visible').click()
    homePage.getSignInEmailBtn().should('be.visible').click()
})

When('user clicks Sign up button', () => {
    homePage.getUserAccountBtn().should('be.visible').click()
    homePage.getNoAccountSignUpBtn().should('be.visible').click()
})

// Then('user validates that they are taken to the {string} page registerVM', (path) => {
//     cy.origin("https://oauth.virginmedia.com/", { args: { path } }, ({ path }) => {   
//         cy.visit('/', {timeout: 10000})
//         cy.url().should('contain', path)
//         cy.go('back');
//     }
//   );
// })



