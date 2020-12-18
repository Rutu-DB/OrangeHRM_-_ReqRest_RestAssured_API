package com.orangehrmlive.demo.StepDefs;

import com.orangehrmlive.demo.pages.LoginPage;
import com.orangehrmlive.demo.pages.LogoutPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDef {
    LoginPage loginPage = new LoginPage();
    LogoutPage logoutPage = new LogoutPage();

    @Given("^I am on OrangeHRM Login Page$")
    public void iAmOnOrangeHRMLoginPage() {
        loginPage.verifyLoginPanel();

    }

    @And("^I enter valid User Name \"([^\"]*)\"$")
    public void iEnterValidUserName(String uName) {
        loginPage.enterUserName(uName);
    }

    @And("^I enter valid Password \"([^\"]*)\"$")
    public void iEnterValidPassword(String pwd) {
        loginPage.enterPassword(pwd);
    }

    @When("^I click on Login Button$")
    public void iClickOnLoginButton() {
        loginPage.clickOnLoginBtn();
    }

    @Then("^I Login Successfully$")
    public void iLoginSuccessfully() {
        loginPage.verifyWelcomeMessage();
    }


    @Given("^I am on OrangeHRM Home Page$")
    public void iAmOnOrangeHRMHomePage() {
        logoutPage.verifyHomePage();
    }

    @And("^I click on Welcome User Link$")
    public void iClickOnWelcomeUserLink() {
    logoutPage.clickOnUserLink();
    }

    @When("^I click on Logout Link$")
    public void iClickOnLogoutLink() {
    logoutPage.clickOnLogoutLink();
    }

    @Then("^I Logout Successfully$")
    public void iLogoutSuccessfully() {
        logoutPage.verifyLogout();
    }
}
