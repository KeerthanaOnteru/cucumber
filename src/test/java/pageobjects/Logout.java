package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Logout {
    public WebDriver lodriver;
    Actions action;
    public Logout(WebDriver driver) {
        lodriver = driver;
        action = new Actions(driver);
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//*[@id=\"nav-link-accountList\"]")
    WebElement userprofile;
    @FindBy(xpath = "//*[@id=\"nav-item-signout\"]")
    WebElement logOutButton;
    @FindBy(xpath = "/html/head/title")
    WebElement titleofpg;
    public void navigateToUserProfile(){
        userprofile.click();
    }
    public void clickOnLogout(){
        logOutButton.click();
    }
    public String titleOfPage(){
        return titleofpg.getText();
    }


}
