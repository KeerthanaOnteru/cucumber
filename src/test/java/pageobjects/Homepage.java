package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Homepage {
    public WebDriver hdriver;
    Actions action;
    public Homepage(WebDriver driver) {
        hdriver = driver;
        action = new Actions(driver);
        PageFactory.initElements(driver, this);
    }
    @FindBy(xpath="//*[@id=\"twotabsearchtextbox\"]")
    private WebElement enterproduct;
    @FindBy(xpath="//*[@id=\"nav-search-submit-button\"]")
    private WebElement search;
    @FindBy(xpath="//*[@id=\"search\"]/div[1]/div[1]/div/span[1]/div[1]/div[3]/div/div/div/div/span/div/div/div/div[1]/div/div[2]")
    private WebElement productResult;
    @FindBy(xpath="//*[@id=\"add-to-cart-button\"]")
    private WebElement addToBagButton;
    @FindBy(xpath = "//*[@id=\"sw-gtc\"]/span/a")
    private WebElement goToBag;
    @FindBy(xpath = "//*[@id=\"CardInstancenc6yUjkzos6sTx18KCbh6g\"]/div[2]/div/ul/li[1]")
    private WebElement productsInCart;
    public void searchProduct(){
        enterproduct.sendKeys("bag");
        search.click();
    }
    public boolean searchResults(){
        return productResult.isDisplayed();
    }
    public void productAddToBag(){
        WebDriverWait wait=new WebDriverWait(hdriver,20);
        wait.until(ExpectedConditions.visibilityOf(productResult));
        productResult.click();
    }

    public void clickAddToBagButton(){
        addToBagButton.click();
        goToBag.click();

    }
    public boolean resultsOfAddToCart(){
        return productsInCart.isDisplayed();

    }

}
