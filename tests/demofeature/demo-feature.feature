Feature: Login in to Actime

    @updated @web @e2e @login
    Scenario: Login to the app
    Given  I am On login page
    When  I enter the valid user and password
    Then I click to the login button
    #Then I expect to 'Enter Time-Track' page