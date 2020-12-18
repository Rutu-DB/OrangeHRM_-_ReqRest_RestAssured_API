@Smoke
Feature: Login
  As a User I want to Login successfully

  Scenario: Verify user can Login successfully using valid credential

    Given I am on OrangeHRM Login Page
    And I enter valid User Name "Admin"
    And I enter valid Password "admin123"
    When I click on Login Button
    Then I Login Successfully

    Scenario: Verify user can Logout successfully

      Given I am on OrangeHRM Login Page
      And I enter valid User Name "Admin"
      And I enter valid Password "admin123"
      When I click on Login Button
      Then I am on OrangeHRM Home Page
      And I click on Welcome User Link
      When I click on Logout Link
      Then I Logout Successfully