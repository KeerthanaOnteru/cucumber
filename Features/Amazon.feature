Feature: Shopping

  Scenario: User logs in to Example Website
    Given User Launches Chrome browser
    And User Opens URL "https://www.amazon.com"
    And User Navigates to LoginIcon
    And User Enters Mobile number as "7799344611"
    And User Enters Password as "Keerthana@13"
    And User Clicks on Login
    Then User should be logged in

  Scenario: User adds a product to the cart
    Given User Launches Chrome browser
    And User Opens URL "https://www.amazon.com"
    And User is on Homepage
    When User Searches for a product
    And User Adds the product to cart
    Then User should see the product in the cart

  Scenario: User logs out
    Given User Launches Chrome browser
    And User Opens URL "https://www.amazon.com"
    And User Navigates to LoginIcon
    And User Enters Mobile number as "7799344611"
    And User Enters Password as "Keerthana@13"
    And User Clicks on Login
    Then User should be logged in
    And User Navigates to the Profile menu
    When User Clicks on Logout
    Then User should be logged out



