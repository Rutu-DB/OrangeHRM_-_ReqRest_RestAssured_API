package com.orangehrmlive.demo.pages;

import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;
import org.testng.Reporter;

public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    @FindBy(xpath = "//div[@id='logInPanelHeading']")
    WebElement _loginPanel;

    @FindBy(xpath = "//input[@id='txtUsername']")
    WebElement _userName;

    @FindBy(xpath = "//input[@id='txtPassword']")
    WebElement _password;
    @FindBy(xpath = "//input[@id='btnLogin']")
    WebElement _loginBtn;

    @FindBy(xpath = "//a[@id='welcome']")
    WebElement _welcomeVerify;

    public void verifyLoginPanel(){
        Reporter.log("Verify Login Panel Message " + _loginPanel.toString() + "<br>");
        log.info("Verify Login Panel Message " + _loginPanel.toString());
        String actual = getTextFromElement(_loginPanel);
        Assert.assertEquals(actual,"LOGIN Panel");
    }

    public void enterUserName(String uName) {
        Reporter.log("Enter User Name " + _userName.toString() + "<br>");
        log.info("Enter User Name " + _userName.toString());
        clickOnElement(_userName);
        sendTextToElement(_userName, uName);
    }

    public void enterPassword(String pwd) {
        Reporter.log("Enter Password " + _password.toString() + "<br>");
        log.info("Enter Password " + _password.toString());
        clickOnElement(_password);
        sendTextToElement(_password, pwd);

    }

    public void clickOnLoginBtn() {
        Reporter.log("Click on Login Button " + _loginBtn.toString() + "<br>");
        log.info("Click on Login Button " + _loginBtn.toString());
        clickOnElement(_loginBtn);

    }

    public void verifyWelcomeMessage() {
        Reporter.log("Get Welcome Message " + _welcomeVerify.toString() + "<br>");
        log.info("Verify Welcome Message " + _welcomeVerify.toString());
        String actual = getTextFromElement(_welcomeVerify);
        Assert.assertEquals(actual, "Welcome Admin");
    }
}
