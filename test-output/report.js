$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Amazon.feature");
formatter.feature({
  "name": "Shopping",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User logs in to Example Website",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User Launches Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.user_Launches_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Opens URL \"https://www.amazon.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.user_Opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigates to LoginIcon",
  "keyword": "And "
});
formatter.match({
  "location": "steps.user_Navigates_to_LoginIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters Mobile number as \"7799344611\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.user_Enters_Mobile_number_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters Password as \"Keerthana@13\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.user_Enters_Password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Clicks on Login",
  "keyword": "And "
});
formatter.match({
  "location": "steps.user_Clicks_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.user_should_be_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User adds a product to the cart",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User Launches Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.user_Launches_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Opens URL \"https://www.amazon.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.user_Opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "steps.user_is_on_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Searches for a product",
  "keyword": "When "
});
formatter.match({
  "location": "steps.user_Searches_for_a_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Adds the product to cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.user_Adds_the_product_to_cart()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //*[@id\u003d\"search\"]/div[1]/div[1]/div/span[1]/div[1]/div[3]/div/div/div/div/span/div/div/div/div[1]/div/div[2]\u0027 (tried for 20 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat pageobjects.Homepage.productAddToBag(Homepage.java:40)\n\tat stepDefinitions.steps.user_Adds_the_product_to_cart(steps.java:80)\n\tat ✽.User Adds the product to cart(file:Features/Amazon.feature:17)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"search\"]/div[1]/div[1]/div/span[1]/div[1]/div[3]/div/div/div/div/span/div/div/div/div[1]/div/div[2]\"}\n  (Session info: chrome\u003d122.0.6261.128)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027keerthana-930XED\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.5.0-25-generic\u0027, java.version: \u002721.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.128, chrome: {chromedriverVersion: 122.0.6261.128 (f18a44fedeb..., userDataDir: /tmp/.org.chromium.Chromium...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:43907}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 4c6e58f147106e9f91350d947fc2e2bf\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"search\"]/div[1]/div[1]/div/span[1]/div[1]/div[3]/div/div/div/div/span/div/div/div/div[1]/div/div[2]}\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:62)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:502)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:486)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat jdk.proxy2/jdk.proxy2.$Proxy17.isDisplayed(Unknown Source)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat pageobjects.Homepage.productAddToBag(Homepage.java:40)\n\tat stepDefinitions.steps.user_Adds_the_product_to_cart(steps.java:80)\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:580)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:126)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:66)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:156)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:232)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:55)\n",
  "status": "failed"
});
formatter.step({
  "name": "User should see the product in the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.user_should_see_the_product_in_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "User logs out",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User Launches Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.user_Launches_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Opens URL \"https://www.amazon.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.user_Opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigates to LoginIcon",
  "keyword": "And "
});
formatter.match({
  "location": "steps.user_Navigates_to_LoginIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters Mobile number as \"7799344611\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.user_Enters_Mobile_number_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters Password as \"Keerthana@13\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.user_Enters_Password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Clicks on Login",
  "keyword": "And "
});
formatter.match({
  "location": "steps.user_Clicks_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.user_should_be_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigates to the Profile menu",
  "keyword": "And "
});
formatter.match({
  "location": "steps.user_Navigates_to_the_Profile_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Clicks on Logout",
  "keyword": "When "
});
formatter.match({
  "location": "steps.user_Clicks_on_Logout()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d122.0.6261.128)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027keerthana-930XED\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.5.0-25-generic\u0027, java.version: \u002721.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.128, chrome: {chromedriverVersion: 122.0.6261.128 (f18a44fedeb..., userDataDir: /tmp/.org.chromium.Chromium...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:45587}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: fa96f891f0e14f4801d7ca78f434ab0f\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:62)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:502)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:486)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:580)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat jdk.proxy2/jdk.proxy2.$Proxy17.click(Unknown Source)\n\tat pageobjects.Logout.clickOnLogout(Logout.java:28)\n\tat stepDefinitions.steps.user_Clicks_on_Logout(steps.java:96)\n\tat ✽.User Clicks on Logout(file:Features/Amazon.feature:29)\n",
  "status": "failed"
});
formatter.step({
  "name": "User should be logged out",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.user_should_be_logged_out()"
});
formatter.result({
  "status": "skipped"
});
});