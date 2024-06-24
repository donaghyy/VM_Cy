class Homepage {

//#region getElements

    getAcceptCookiesBtn(){
        var el = cy.get('#onetrust-accept-btn-handler')
        return el;
    }

    getPostCodeInput(){
        var el = cy.get('#postcode')
        return el;
    }

    getCheckAvailabilityBtn(){
        var el = cy.get('.button-md > .button')
        return el;
    }

    getCheckAvailabilityBtn2(){
        var el = cy.get('#check-availability > .button')
        return el;
    }

    getPostCodeInputValidationError(){
        var el = cy.get('.postcode-checker__error-label--postcode-error-msg')
        return el;
    }
    
    getHeadingTitle(){
        var el = cy.get('.heading__title')
        return el;
    }

    getBroadbandDealsNavMain(){
        var el = cy.get('.menu-parent-broadband-deals')
        return el;
    }

    getMobileDealsNavMain(){
        var el = cy.get('[title="Mobile deals "]')
        return el;
    }

    getHelpNavMain(){
        var el = cy.get('.menu-parent-help > .Body-Book')
        return el;
    }

    getServiceAvailabile(){
        var el = cy.get('#service-available', { timeout: 20000 })
        return el;
    }

    getAddressSelector(){
        var el = cy.get('.Body > [tabindex="0"]')
        return el;
    }

    getViewAllDealsBtn(){
        var el = cy.get('.vm-col-xs-12 > div > vm-button > .button')
        return el;
    }

    getMyVirginMediaIcon(){
        var el = cy.get(':nth-child(13) > .vm-container > .vm-row > :nth-child(2) > .vm-tile-container > .tile-nav-link')
        return el;
    }

    getLiveChatIcon(){
        var el = cy.get(':nth-child(13) > .vm-container > .vm-row > :nth-child(3) > .vm-tile-container > .tile-nav-link')
        return el;
    }

    getHelpAndSupportIcon(){
        var el = cy.get(':nth-child(13) > .vm-container > .vm-row > :nth-child(4) > .vm-tile-container > .tile-nav-link')
        return el;
    }

    getNetworkCoverageIcon(){
        var el = cy.get(':nth-child(13) > .vm-container > .vm-row > :nth-child(5) > .vm-tile-container > .tile-nav-link')
        return el;
    }

    getBlogIcon(){
        var el = cy.get(':nth-child(13) > .vm-container > .vm-row > :nth-child(6) > .vm-tile-container > .tile-nav-link')
        return el;
    }

    getBroadbandOnlyIcon(){
        var el = cy.get(':nth-child(15) > .vm-container > .vm-row > :nth-child(2) > .vm-tile-container > .tile-nav-link')
        return el;
    }

    getBroadbandDealsIcon(){
        var el = cy.get(':nth-child(15) > .vm-container > .vm-row > :nth-child(3) > .vm-tile-container > .tile-nav-link')
        return el;
    }

    getBroadbandAndPhoneIcon(){
        var el = cy.get(':nth-child(15) > .vm-container > .vm-row > :nth-child(4) > .vm-tile-container > .tile-nav-link')
        return el;
    }

    getTvBroadbandAndPhoneIcon(){
        var el = cy.get(':nth-child(15) > .vm-container > .vm-row > :nth-child(5) > .vm-tile-container > .tile-nav-link')
        return el;
    }

    getO2CustomerDealsIcon(){
        var el = cy.get(':nth-child(15) > .vm-container > .vm-row > :nth-child(6) > .vm-tile-container > .tile-nav-link')
        return el;
    }

    getLegalBroadbandSection(){
        var el = cy.get('vm-accordion-title-bar.ng-tns-c2765555989-1 > .vm-accordion__title-bar > .vm-accordion__title-bar--toggle')
        return el;
    }

    getLegalBroadbandSectionProof(){
        var el = cy.get('.ng-tns-c2765555989-1.ng-star-inserted > .vm-accordion-item')
        return el;
    }

    getLegalOffersSection(){
        var el = cy.get('vm-accordion-title-bar.ng-tns-c2765555989-2 > .vm-accordion__title-bar > .vm-accordion__title-bar--toggle')
        return el;
    }

    getLegalOffersSectionProof(){
        var el = cy.get('.ng-tns-c2765555989-2.ng-star-inserted > .vm-accordion-item')
        return el;
    }

    getLegalO2PrioritySections(){
        var el = cy.get('vm-accordion-title-bar.ng-tns-c2765555989-3 > .vm-accordion__title-bar > .vm-accordion__title-bar--toggle')
        return el;
    }

    getLegalO2PrioritySectionsProof(){
        var el = cy.get('.ng-tns-c2765555989-3.ng-star-inserted > .vm-accordion-item')
        return el;
    }

    getFooterBroadbandDeals(){
        var el = cy.get('.link-groups > :nth-child(1) > nav > .link-group > :nth-child(1) > .Body-X-Small-Book')
        return el;
    }
    
    getFooterTvBroadbandPhone(){
        var el = cy.get('.link-groups > :nth-child(1) > nav > .link-group > :nth-child(2) > .Body-X-Small-Book')
        return el;
    }

    getFooterBroadbandPhone(){
        var el = cy.get('.link-groups > :nth-child(1) > nav > .link-group > :nth-child(3) > .Body-X-Small-Book')
        return el;
    }

    getFooterBroadbandTvPhoneSim(){
        var el = cy.get('.link-groups > :nth-child(1) > nav > .link-group > :nth-child(4) > .Body-X-Small-Book')
        return el;
    }

    getFooterBroadbandOnly(){
        var el = cy.get(':nth-child(2) > nav > .link-group > :nth-child(1) > .Body-X-Small-Book')
        return el;
    }

    getFooterFibreBroadband(){
        var el = cy.get(':nth-child(2) > nav > .link-group > :nth-child(2) > .Body-X-Small-Book')
        return el;
    }

    getFooterSwitchBroadband(){
        var el = cy.get(':nth-child(2) > nav > .link-group > :nth-child(3) > .Body-X-Small-Book')
        return el;
    }

    getFooterGigBroadband(){
        var el = cy.get(':nth-child(2) > nav > .link-group > :nth-child(4) > .Body-X-Small-Book')
        return el;
    }

    getFooterO2Shop(){
        var el = cy.get(':nth-child(3) > nav > .link-group > :nth-child(1) > .Body-X-Small-Book')
        return el;
    }

    getFooterPayMonthlyPhones(){
        var el = cy.get(':nth-child(3) > nav > .link-group > :nth-child(2) > .Body-X-Small-Book')
        return el;
    }

    getFooterSimOnly(){
        var el = cy.get(':nth-child(3) > nav > .link-group > :nth-child(3) > .Body-X-Small-Book')
        return el;
    }

    getFooterPhoneUpgrades(){
        var el = cy.get(':nth-child(3) > nav > .link-group > :nth-child(4) > .Body-X-Small-Book')
        return el;
    }

    getFooterBusinessBroadband(){
        var el = cy.get(':nth-child(4) > nav > .link-group > :nth-child(1) > .Body-X-Small-Book')
        return el;
    }

    getFooterBroadbandTv(){
        var el = cy.get(':nth-child(4) > nav > .link-group > :nth-child(2) > .Body-X-Small-Book')
        return el;
    }

    getFooterBroadbandSpeedTest(){
        var el = cy.get(':nth-child(4) > nav > .link-group > :nth-child(3) > .Body-X-Small-Book')
        return el;
    }

    getFooterCheapBroadband(){
        var el = cy.get(':nth-child(4) > nav > .link-group > :nth-child(4) > .Body-X-Small-Book')
        return el;
    }

    getFooterAboutUs(){
        var el = cy.get('.footer__navigation > .vm-row > :nth-child(1) > .Body-X-Small-Book')
        return el;
    }

    getFooterCareers(){
        var el = cy.get('.footer__navigation > .vm-row > :nth-child(2) > .Body-X-Small-Book')
        return el;
    }

    getFooterAdvertiseWithUs(){
        var el = cy.get('.footer__navigation > .vm-row > :nth-child(3) > .Body-X-Small-Book')
        return el;
    }

    getFooterPartnerWithUs(){
        var el = cy.get('.footer__navigation > .vm-row > :nth-child(4) > .Body-X-Small-Book')
        return el;
    }

    getFooterAccessibility(){
        var el = cy.get('.footer__navigation > .vm-row > :nth-child(5) > .Body-X-Small-Book')
        return el;
    }

    getFooterLegal(){
        var el = cy.get('.footer__navigation > .vm-row > :nth-child(6) > .Body-X-Small-Book')
        return el;
    }

    getFooterModernSlavery(){
        var el = cy.get('.vm-row > :nth-child(7) > .Body-X-Small-Book')
        return el;
    }

    getFooterSitemap(){
        var el = cy.get('.vm-row > :nth-child(8) > .Body-X-Small-Book')
        return el;
    }

    getFooterContactUs(){
        var el = cy.get('.vm-row > :nth-child(9) > .Body-X-Small-Book')
        return el;
    }

    getFooterOurCookies(){
        var el = cy.get('.vm-row > :nth-child(10) > .Body-X-Small-Book')
        return el;
    }

    getFooterVMO2(){
        var el = cy.get('.vm-row > :nth-child(11) > .Body-X-Small-Book')
        return el;
    }

    getFooterKeepingChildrenSafeOnline(){
        var el = cy.get('.vm-row > :nth-child(12) > .Body-X-Small-Book')
        return el;
    }

    getFooterBusinessBroadband2(){
        var el = cy.get('.vm-row > :nth-child(13) > .Body-X-Small-Book')
        return el;
    }

    getFooterSustainability(){
        var el = cy.get('.vm-row > :nth-child(14) > .Body-X-Small-Book')
        return el;
    }

    getUserAccountBtn(){
        var el = cy.get('[data-cy="user-account-btn"]')
        return el;
    }

    getSignInVMBtn(){
        var el = cy.get(':nth-child(1) > .xs-12 > .login-title > .text-button')
        return el;
    }

    getSignInEmailBtn(){
        var el = cy.get('[data-cy="sign-in-to-my-email"]')
        return el;
    }

    getNoAccountSignUpBtn(){
        var el = cy.get('[data-cy="no-account-sign-up-btn"]')
        return el;
    }

//#endregion

//#region Functions
    
    clickNavlink(link){
        cy.get("[title='"+link+"']")
        .click({force: true});
    }

    returnNavLink(link){
        var el = cy.get("[title='"+link+"']")
        return el;
    }

    clickFooterlink(link){
        switch (link) {
            case 'Broadband deals':
                this.getFooterBroadbandDeals().scrollIntoView().click({force: true})
                break;
            case 'Broadband, TV and phone deals':
                this.getFooterTvBroadbandPhone().scrollIntoView().click({force: true})
                break;
            case 'Broadband and phone deals':
                this.getFooterBroadbandPhone().scrollIntoView().click({force: true})
                break;
            case 'Broadband, TV, phone and SIM deals':
                this.getFooterBroadbandTvPhoneSim().scrollIntoView().click({force: true})
                break;
            case 'Broadband only':
                this.getFooterBroadbandOnly().scrollIntoView().click({force: true})
                break;
            case 'Fibre broadband':
                this.getFooterFibreBroadband().scrollIntoView().click({force: true})
                break;
            case 'Switch broadband':
                this.getFooterSwitchBroadband().scrollIntoView().click({force: true})
                break;
            case 'Gigabit broadband':
                this.getFooterGigBroadband().scrollIntoView().click({force: true})
                break;
            case 'O2 Shop':
                this.getFooterO2Shop().scrollIntoView().click({force: true})
                break;
            case 'Pay Monthly Phones':
                this.getFooterPayMonthlyPhones().scrollIntoView().click({force: true})
                break;
            case 'SIM Only':
                this.getFooterSimOnly().scrollIntoView().click({force: true})
                break;
            case 'Phone Upgrades':
                this.getFooterPhoneUpgrades().scrollIntoView().click({force: true})
                break;
            case 'Business Broadband':
                this.getFooterBusinessBroadband().scrollIntoView().click({force: true})
                break;
            case 'Broadband and TV':
                this.getFooterBroadbandTv().scrollIntoView().click({force: true})
                break;
            case 'Broadband SpeedTest':
                this.getFooterBroadbandSpeedTest().scrollIntoView().click({force: true})
                break;
            case 'Cheap Broadband':
                this.getFooterCheapBroadband().scrollIntoView().click({force: true})
                break;

            case 'About us':
                this.getFooterAboutUs().scrollIntoView().invoke('removeAttr', 'target')
                .click({force: true})
                break;
            case 'Careers':
                this.getFooterCareers().scrollIntoView().invoke('removeAttr', 'target')
                .click({force: true})
                break;
            case 'Advertise with us':
                this.getFooterAdvertiseWithUs().scrollIntoView().invoke('removeAttr', 'target')
                .click({force: true})
                break;
            case 'Partner with us':
                this.getFooterPartnerWithUs().scrollIntoView().invoke('removeAttr', 'target')
                .click({force: true})
                break;
            case 'Accessibility':
                this.getFooterAccessibility().scrollIntoView().invoke('removeAttr', 'target')
                .click({force: true})
                break;
            case 'Legal':
                this.getFooterLegal().scrollIntoView().invoke('removeAttr', 'target')
                .click({force: true})
                break;
            case 'Modern day slavery statement':
                this.getFooterModernSlavery().scrollIntoView().invoke('removeAttr', 'target')
                .click({force: true})
                break;
            case 'Sitemap':
                this.getFooterSitemap().scrollIntoView().invoke('removeAttr', 'target')
                .click({force: true})
                break;
            case 'Contact us':
                this.getFooterContactUs().scrollIntoView().invoke('removeAttr', 'target')
                .click({force: true})
                break;
            case 'Our cookies':
                this.getFooterOurCookies().scrollIntoView().invoke('removeAttr', 'target')
                .click({force: true})
                break;
            case 'Virgin Media and O2':
                this.getFooterVMO2().scrollIntoView().invoke('removeAttr', 'target')
                .click({force: true})
                break;
            case 'Keeping Children safe online':
                this.getFooterKeepingChildrenSafeOnline().scrollIntoView().invoke('removeAttr', 'target')
                .click({force: true})
                break;
            case 'Business broadband':
                this.getFooterBusinessBroadband2.scrollIntoView().invoke('removeAttr', 'target')
                .click({force: true})
                break;
            case 'Sustainability':
                this.getFooterSustainability().scrollIntoView().invoke('removeAttr', 'target')
                .click({force: true})
                break;


            default:
              console.log(`Couldnt find ${link}.`);
          }
    }
    
//#endregion

}

export default Homepage