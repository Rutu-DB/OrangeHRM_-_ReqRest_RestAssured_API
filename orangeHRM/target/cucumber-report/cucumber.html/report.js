$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/LoginLogout.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "As a User I want to Login successfully",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "duration": 8319783800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user can Login successfully using valid credential",
  "description": "",
  "id": "login;verify-user-can-login-successfully-using-valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on OrangeHRM Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter valid User Name \"Admin1\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter valid Password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.iAmOnOrangeHRMLoginPage()"
});
formatter.result({
  "duration": 141092300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin1",
      "offset": 25
    }
  ],
  "location": "LoginStepDef.iEnterValidUserName(String)"
});
formatter.result({
  "duration": 128405800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 24
    }
  ],
  "location": "LoginStepDef.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 131715000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.iClickOnLoginButton()"
});
formatter.result({
  "duration": 557426200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.iLoginSuccessfully()"
});
formatter.result({
  "duration": 30107776400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@id\u003d\u0027welcome\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-39B32HH7\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\rutun\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50081}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: dcb404d53cba753104b326fc058d2578\n*** Element info: {Using\u003dxpath, value\u003d//a[@id\u003d\u0027welcome\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat com.orangehrmlive.demo.utility.Utility.getTextFromElement(Utility.java:58)\r\n\tat com.orangehrmlive.demo.pages.LoginPage.verifyWelcomeMessage(LoginPage.java:61)\r\n\tat com.orangehrmlive.demo.StepDefs.LoginStepDef.iLoginSuccessfully(LoginStepDef.java:37)\r\n\tat ✽.Then I Login Successfully(src/test/java/resources/featurefile/LoginLogout.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 10723415200,
  "status": "passed"
});
formatter.before({
  "duration": 8300408700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify user can Logout successfully",
  "description": "",
  "id": "login;verify-user-can-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I am on OrangeHRM Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter valid User Name \"Admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter valid Password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I am on OrangeHRM Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click on Welcome User Link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Logout Link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I Logout Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.iAmOnOrangeHRMLoginPage()"
});
formatter.result({
  "duration": 62303100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 25
    }
  ],
  "location": "LoginStepDef.iEnterValidUserName(String)"
});
formatter.result({
  "duration": 153795500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 24
    }
  ],
  "location": "LoginStepDef.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 133229900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.iClickOnLoginButton()"
});
formatter.result({
  "duration": 2358176300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.iAmOnOrangeHRMHomePage()"
});
formatter.result({
  "duration": 75253800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.iClickOnWelcomeUserLink()"
});
formatter.result({
  "duration": 107550300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.iClickOnLogoutLink()"
});
formatter.result({
  "duration": 10101506600,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-39B32HH7\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\rutun\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50134}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 2c872a76cb2532044384b55646c3711a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.orangehrmlive.demo.utility.Utility.clickOnElement(Utility.java:40)\r\n\tat com.orangehrmlive.demo.pages.LogoutPage.clickOnLogoutLink(LogoutPage.java:42)\r\n\tat com.orangehrmlive.demo.StepDefs.LoginStepDef.iClickOnLogoutLink(LoginStepDef.java:53)\r\n\tat ✽.When I click on Logout Link(src/test/java/resources/featurefile/LoginLogout.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDef.iLogoutSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5384610700,
  "status": "passed"
});
});