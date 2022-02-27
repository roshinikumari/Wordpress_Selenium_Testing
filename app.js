require('dotenv').config();
const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

async function WooCommerce()
{
    await driver.get("http://localhost/sample/wp-login.php?loggedout=true&wp_lang=en_US");
    await driver.findElement(By.xpath('//*[@id="user_login"]')).sendKeys('roshini@');
    await driver.findElement(By.xpath('//*[@id="user_pass"]')).sendKeys('ehceEPDH)0U34bkR7B');
    await driver.findElement(By.xpath('//*[@id="wp-submit"]')).click();
    var productname =['product A','product B','product C','product D','product E'];
    var regular_price = ['5000','6000','4500','7000','10000'];
    var sale_price = ['4000','5000','3500','5000','8000'];
    for(let i=0;i<5;i++)
    {
        await driver.findElement(By.xpath('//*[@id="title"]')).sendKeys(productname[i]);
        await driver.findElement(By.xpath('//*[@id="_regular_price"]')).sendKeys(regular_price[i]);
        await driver.findElement(By.xpath('//*[@id="_sale_price"]')).sendKeys(sale_price[i]);
        await driver.findElement(By.xpath('//*[@id="publish"]')).click();
        driver.get('http://localhost/sample/wp-admin/post-new.php?post_type=product');
    }
}
WooCommerce();
