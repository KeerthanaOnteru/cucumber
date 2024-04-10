package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class LoginPage {

    public WebDriver ldriver;
    Actions action;
    WebDriverWait wait;
    public LoginPage(WebDriver driver){
        ldriver=driver;
        action=new Actions(driver);
        PageFactory.initElements(driver, this);
        wait=new WebDriverWait(driver,30);

    }
    @FindBy(xpath="//*[@id=\"nav-link-accountList\"]")
    WebElement loginIcon;
    @FindBy(xpath="//*[@id=\"nav-flyout-ya-signin\"]/a")
    WebElement login;
    @FindBy(xpath="//*[@id=\"ap_email\"]")
    WebElement mobilenum;
    @FindBy(xpath="//*[@id=\"continue\"]")
    WebElement continueb;
    @FindBy(xpath="//*[@id=\"ap_password\"]")
    WebElement password;
    @FindBy(xpath="//*[@id=\"signInSubmit\"]")
    WebElement signin;

    public void navigatetologinpage(){
        loginIcon.click();
        action.moveToElement(login).click();

    }

    public void enterMobileNum(String mb) {

        mobilenum.sendKeys(mb);
        continueb.click();
        WebDriverWait wait=new WebDriverWait(ldriver,20);
        wait.until(ExpectedConditions.visibilityOf(password));

    }

    public void setPassword(String pwd) {
       password.sendKeys(pwd);

    }
    public void clickonLogin(){
        signin.click();
    }



}
