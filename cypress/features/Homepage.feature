Feature: Homepage Test Suite
 Test suite for testing functionality on the Virgin Media Homepage

 Background: User navigates to the Virgin Media Homepage
    Given user navigates to "https://www.virginmedia.com/"
  

  Scenario: Verify Broadband Deals Nav Items
    Given user is on the homepage
    When user expands Broadband deals from the nav menu
    And user clicks 'Broadband deals ' link
    Then user validates that they are navigated to the "broadband" page
    And user clicks 'Broadband only deals' link
    Then user validates that they are navigated to the "broadband-only" page
    And user clicks 'Broadband & TV deals ' link
    Then user validates that they are navigated to the "broadband-and-tv" page
    And user clicks 'Broadband & phone deals ' link
    Then user validates that they are navigated to the "broadband-and-phone" page
    And user clicks 'Broadband, TV & phone deals ' link
    Then user validates that they are navigated to the "packages" page
    And user clicks 'Student broadband deals' link
    Then user validates that they are navigated to the "student" page
    And user clicks 'Broadband & O2 SIM deals' link
    Then user validates that they are navigated to the "broadband-and-sim" page
    And user clicks 'Volt benefits for VMO2 customers' link
    Then user validates that they are navigated to the "volt" page
    And user clicks 'Landline packages' link
    Then user validates that they are navigated to the "landline" page
    And user sees 'Fibre broadband' link, which goes to 'fibre'
    And user sees 'Business broadband' link, which goes to 'business-broadband'
    And user clicks 'Broadband for low income families ' link
    Then user validates that they are navigated to the "low-income-families" page
    And user clicks 'TV packages ' link
    Then user validates that they are navigated to the "tv" page
    And user clicks 'What to watch' link
    Then user validates that they are navigated to the "virgin-tv-edit" page
    And user clicks 'Stream from Virgin Media ' link
    Then user validates that they are navigated to the "tv/stream" page
    And user clicks 'Broadband speed test ' link
    Then user validates that they are navigated to the "speed-test" page
    And user clicks 'Broadband postcode checker ' link
    Then user validates that they are navigated to the "postcode-checker" page
    And user sees 'Refer a friend ' link, which goes to 'broadband_home'

  Scenario: Verify Mobile Deals Nav Items
    Given user is on the homepage
    When user expands Mobile deals from the nav menu
    And user clicks 'Virgin Mobile' link
    Then user validates that they are navigated to the "mobile" page
    And user clicks 'Pay Monthly Phones ' link
    Then user validates that they are navigated to the "pay-monthly" page
    And user clicks 'Pay Monthly SIMs' link
    Then user validates that they are navigated to the "sim-only" page
    And user clicks 'Upgrade' link
    Then user validates that they are navigated to the "upgrade" page
    And user sees 'Phones' link, which goes to 'phones'
    And user sees 'SIM Only Deals' link, which goes to 'o2.co.uk/shop/sim-cards/sim-only-deals'
    And user sees 'Pay As You Go SIMs' link, which goes to 'o2.co.uk/shop/sim-cards/pay-as-you-go'
    And user sees 'Tablets' link, which goes to 'o2.co.uk/shop/tablets'
    And user sees 'Apple iPhone' link, which goes to 'o2.co.uk/iphone'
    And user sees 'Apple iPad' link, which goes to 'o2.co.uk/ipad'
    And user sees 'Apple Watch' link, which goes to 'o2.co.uk/apple-watch'
    And user sees 'Apple AirPods' link, which goes to 'o2.co.uk/airpods'
    And user sees 'Samsung Galaxy' link, which goes to 'o2.co.uk/samsung-galaxy-phones'
    And user sees 'Google Pixel' link, which goes to 'o2.co.uk/shop/brand/google'
    And user sees 'Sony Xperia' link, which goes to 'o2.co.uk/shop/brand/sony'
    And user sees 'Refurbished Phones' link, which goes to 'o2.co.uk/shop/like-new'

  Scenario: Verify Help Nav Item
    Given user is on the homepage
    When user clicks Help from the nav menu
    Then user validates that they are navigated to the "help" page

  Scenario: Verify Account Nav Item
    Given user is on the homepage
    And user clicks Account from the nav menu
    When user clicks Sign in to my Virgin Media button
    Then user validates that they are navigated to the "oauth.virginmedia.com" page
    When user clicks Sign in via email button
    Then user validates that they are navigated to the "manage-email-account" page
    When user clicks Sign up button
    Then user validates that they are navigated to the "register" page 

  
  Scenario: Verify text validation on the postcode input
    Given user is on the homepage
    And user sees the postcode textbox
    When user clicks the Check availability button
    Then user sees the validation error displayed

  Scenario: Verify user gets Keep me posted form when Virgin Media is not in their area
    Given user is on the homepage
    When user types 'RH15 0UU' into the postcode textbox
    And user clicks Check availability button
    And user selects an address
    And user clicks Check availability button in flow
    Then user is navigated to the Keep me posted page

  Scenario: Verify user gets success message when Virgin Media is in their area
    Given user is on the homepage
    When user types 'BT47 6FY' into the postcode textbox
    And user clicks Check availability button
    And user selects an address
    And user clicks Check availability button in flow
    Then user sees success message is displayed

  Scenario: Verify how can we help links
    Given user is on the homepage
    When user clicks My Virgin Media icon
    Then user is navigated to the 'my-virgin-media' page
    When user clicks Help and support icon
    Then user is navigated to the 'help' page
    When user clicks Network coverage icon
    Then user is navigated to the 'network-expansion' page
    When user clicks Blog icon
    Then user is navigated to the 'blog' page
    When user clicks Broadband only icon
    Then user is navigated to the 'broadband-only' page
    When user clicks Broadband deals icon
    Then user is navigated to the 'broadband' page
    When user clicks Broadband and phone icon
    Then user is navigated to the 'broadband-and-phone' page
    When user clicks TV, Broadband and phone icon
    Then user is navigated to the 'packages' page
    When user clicks O2 Customer deals icon
    Then user is navigated to the 'existing-o2' page
    When user clicks Live chat icon
    Then user is navigated to the 'live-chat' page
 
  Scenario: Verify the legal stuff accordians
    Given user is on the homepage
    When user expands Broadband section
    Then user sees Broadband section has been expanded
    When user expands Offers section
    Then user sees Offers section has been expanded
    When user expands O2 Priority section
    Then user sees O2 Priority section has been expanded

  Scenario: Verify footer links functionality
    Given user is on the homepage
    When user clicks 'Broadband deals' Footer link
    Then user is navigated to the 'broadband' page
    When user clicks 'Broadband, TV and phone deals' Footer link
    Then user is navigated to the 'packages' page
    When user clicks 'Broadband and phone deals' Footer link
    Then user is navigated to the 'broadband-and-phone' page
    When user clicks 'Broadband, TV, phone and SIM deals' Footer link
    Then user is navigated to the 'broadband-and-sim' page
    When user clicks 'Broadband only' Footer link
    Then user is navigated to the 'broadband-only' page
    When user clicks 'Fibre broadband' Footer link
    Then user is navigated to the 'fibre' page
    When user clicks 'Switch broadband' Footer link
    Then user is navigated to the 'switch' page
    When user clicks 'Gigabit broadband' Footer link
    Then user is navigated to the 'gigabit' page
    And user sees 'O2 Shop' link, which goes to 'shop'
    And user sees 'Pay Monthly Phones' link, which goes to 'pay-monthly'
    And user sees 'SIM Only' link, which goes to 'sim-only'
    And user sees 'Phone Upgrades' link, which goes to 'upgrade'
    And user sees 'Business broadband' link, which goes to 'business-broadband'
    When user clicks 'Broadband and TV' Footer link
    Then user is navigated to the 'broadband-and-tv' page
    When user clicks 'Broadband SpeedTest' Footer link
    Then user is navigated to the 'speed-test' page
    When user clicks 'Cheap Broadband' Footer link
    Then user is navigated to the 'cheap' page
    When user clicks 'About us' Footer link
    Then user is navigated to the 'corporate' page
    And user sees 'Careers' link, which goes to 'jobs.virginmediao2.co.uk'
    When user clicks 'Advertise with us' Footer link
    Then user is navigated to the 'advertise' page
    When user clicks 'Partner with us' Footer link
    Then user is navigated to the 'partner-with-us' page
    When user clicks 'Accessibility' Footer link
    Then user is navigated to the 'accessibility' page
    When user clicks 'Legal' Footer link
    Then user is navigated to the 'legal' page
    When user clicks 'Modern day slavery statement' Footer link
    Then user is navigated to the 'resources' page
    When user clicks 'Sitemap' Footer link
    Then user is navigated to the 'sitemap' page
    When user clicks 'Contact us' Footer link
    Then user is navigated to the 'contact-us' page
    When user clicks 'Our cookies' Footer link
    Then user is navigated to the 'our-cookies' page
    When user clicks 'Virgin Media and O2' Footer link
    Then user is navigated to the 'virgin-media-o2' page
    And user sees 'Keeping children safe online' link, which goes to 'www.internetmatters.org/digital-family-toolkit'
    And user sees 'Business broadband' link, which goes to 'business-broadband'
    When user clicks 'Sustainability' Footer link
    Then user is navigated to the 'sustainability' page

  @NonFunctional
  Scenario: Verify responsive design
    Given user is on the homepage
    When user opens the homepage on a desktop
    Then the layout should adapt correctly

    When user opens the homepage on a tablet
    Then the layout should adapt correctly

    When user opens the homepage on a mobile
    Then the layout should adapt correctly
  
  @NonFunctional
  Scenario: Verify accessibility compliance
    Given user is on the homepage
    When user analyzes the page using an accessibility testing tool
    Then the homepage should have no major accessibility issues
    And the page should comply with WCAG 2.1 standards