package stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pageobjects.Homepage;
import pageobjects.LoginPage;
import pageobjects.Logout;

import java.util.concurrent.TimeUnit;

public class steps {
    WebDriver driver;
    LoginPage lp;
    Homepage hp;
    Logout lo;
    @Given("User Launches Chrome browser")
    public void user_Launches_Chrome_browser() {
        WebDriverManager.chromedriver().setup();
        driver=new ChromeDriver();
        lp=new LoginPage(driver);
        hp=new Homepage(driver);
        lo=new Logout(driver);
    }

    @Given("User Opens URL {string}")
    public void user_Opens_URL(String url) {
        driver.get(url);

    }

    @Given("User Navigates to LoginIcon")
    public void user_Navigates_to_LoginIcon() {
         lp.navigatetologinpage();

    }

    @Given("User Enters Mobile number as {string}")
    public void user_Enters_Mobile_number_as(String mb) {
         lp.enterMobileNum(mb);
    }

    @Given("User Enters Password as {string}")
    public void user_Enters_Password_as(String pwd) {
        lp.setPassword(pwd);

    }

    @Given("User Clicks on Login")
    public void user_Clicks_on_Login() {
        lp.clickonLogin();

    }

    @Then("User should be logged in")
    public void user_should_be_logged_in() {
         System.out.println("user successfully logged in ");
    }

    @And("User is on Homepage")
    public void user_is_on_Homepage() {
        System.out.println("user navigated to homePage");
    }

    @When("User Searches for a product")
    public void user_Searches_for_a_product() {
        hp.searchProduct();
    }

    @When("User Adds the product to cart")
    public void user_Adds_the_product_to_cart() {
        hp.productAddToBag();
        hp.clickAddToBagButton();
    }

    @Then("User should see the product in the cart")
    public void user_should_see_the_product_in_the_cart() {
       Assert.assertTrue(hp.resultsOfAddToCart());
    }

    @And("User Navigates to the Profile menu")
    public void user_Navigates_to_the_Profile_menu() {
        lo.navigateToUserProfile();
    }

    @When("User Clicks on Logout")
    public void user_Clicks_on_Logout() {
        lo.clickOnLogout();
    }

    @Then("User should be logged out")
    public void user_should_be_logged_out() {
        String pageTitle=lo.titleOfPage();
        Assert.assertEquals("Amazon Sign In",pageTitle);
    }

}