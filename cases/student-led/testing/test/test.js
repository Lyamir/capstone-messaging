const {Builder, By, Key, ulit, WebDriver, WebElement} = require ("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const assert = require("assert");
const should = require("chai").should();

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

let address = "http://localhost:3001";

let user1 = {
    username:"user1",
    password:"password"
}

let testuser = {
    username:makeid(10),
    password:"password"
}

let testemail = {
    recipient:user1.username,
    message:makeid(20)
}

let testuser2 = {
    username:makeid(10),
    password:"password"
}

let testemail2 = {
    recipient:user1.username,
    message:makeid(20)
}

let testemail3 = {
    recipient:testuser2.username,
    message:makeid(20)
}

describe("Unit Tests", async function(){
    //Tests login functionality
    it("Should successfully login", async function(){
        let options = new firefox.Options();
        options.addArguments("-headless");
        let driver = await new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
        await driver.get(address);

        await driver.findElement(By.xpath("/html/body/div/form/input[1]")).sendKeys(user1.username);
        await driver.findElement(By.xpath("/html/body/div/form/input[2]")).sendKeys(user1.password);
        await driver.findElement(By.xpath("/html/body/div/form/button")).click();

        let displayname = await driver.findElements(By.xpath("//*[contains(text(), \""+user1.username+"\")]"));

        displayname.should.not.be.empty;

        await driver.quit();
    });

    //Tests logout functionality
    it("It logout successfully", async function(){
        let options = new firefox.Options();
        options.addArguments("-headless");
        let driver = await new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
        await driver.get(address);

        await driver.findElement(By.xpath("/html/body/div/form/input[1]")).sendKeys(user1.username);
        await driver.findElement(By.xpath("/html/body/div/form/input[2]")).sendKeys(user1.password);
        await driver.findElement(By.xpath("/html/body/div/form/button")).click();

        await driver.findElement(By.xpath("/html/body/header/a[3]")).click();
        
        let loginbtn = await driver.findElement(By.xpath("/html/body/div/form/button"));

        loginbtn.should.not.be.empty;

        await driver.quit();
    });

    //Tests register functionality
    it("It should register a random user successfully", async function(){
        let options = new firefox.Options();
        options.addArguments("-headless");
        let driver = await new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
        await driver.get(address);

        await driver.findElement(By.xpath("/html/body/div/form/a")).click();
        
        await driver.findElement(By.xpath("/html/body/div/form/input[1]")).sendKeys(testuser.username);
        await driver.findElement(By.xpath("/html/body/div/form/input[2]")).sendKeys(testuser.password);
        await driver.findElement(By.xpath("/html/body/div/form/button")).click();

        await driver.get(address);

        await driver.findElement(By.xpath("/html/body/div/form/input[1]")).sendKeys(testuser.username);
        await driver.findElement(By.xpath("/html/body/div/form/input[2]")).sendKeys(testuser.password);
        await driver.findElement(By.xpath("/html/body/div/form/button")).click();

        let displayname = await driver.findElements(By.xpath("//*[contains(text(), \""+testuser.username+"\")]"));

        displayname.should.not.be.empty;

        await driver.quit();
    });

    //TODO: Tests send email functionality
    

    //Tests inbox functionality
    it("It should display the inbox", async function(){
        let options = new firefox.Options();
        options.addArguments("-headless");
        let driver = await new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
        await driver.get(address);

        await driver.findElement(By.xpath("/html/body/div/form/input[1]")).sendKeys(user1.username);
        await driver.findElement(By.xpath("/html/body/div/form/input[2]")).sendKeys(user1.password);
        await driver.findElement(By.xpath("/html/body/div/form/button")).click();

        await driver.get(address+"/inbox");
        
        let testinbox = await driver.findElements(By.xpath("//*[contains(text(), \""+testemail.message+"\")]"));

        testinbox.should.not.be.empty;

        await driver.quit();
    });

    //Tests sentbox functionality
    it("It should get emails from sentbox", async function(){
        let options = new firefox.Options();
        options.addArguments("-headless");
        let driver = await new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
        await driver.get(address);

        await driver.findElement(By.xpath("/html/body/div/form/input[1]")).sendKeys(testuser.username);
        await driver.findElement(By.xpath("/html/body/div/form/input[2]")).sendKeys(testuser.password);
        await driver.findElement(By.xpath("/html/body/div/form/button")).click();

        await driver.get(address+"/sentbox");
        
        let testsentbox = await driver.findElements(By.xpath("//*[contains(text(), \""+testemail.message+"\")]"));

        testsentbox.should.not.be.empty;

        await driver.quit();
    });
});

describe("Integration Testing", async function(){
    it("It should test the full functionality of messaging", async function(){
        let options = new firefox.Options();
        options.addArguments("-headless");
        let driver = await new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
        await driver.get(address);

        console.log("1");
        //Registers another random user
        await driver.findElement(By.xpath("/html/body/div/form/a")).click();
        
        await driver.findElement(By.xpath("/html/body/div/form/input[1]")).sendKeys(testuser2.username);
        await driver.findElement(By.xpath("/html/body/div/form/input[2]")).sendKeys(testuser2.password);
        await driver.findElement(By.xpath("/html/body/div/form/button")).click();

        await driver.get(address);
        console.log("2");
        //Login as the random user
        await driver.findElement(By.xpath("/html/body/div/form/input[1]")).sendKeys(testuser2.username);
        await driver.findElement(By.xpath("/html/body/div/form/input[2]")).sendKeys(testuser2.password);
        await driver.findElement(By.xpath("/html/body/div/form/button")).click();

        let displayname = await driver.findElements(By.xpath("//*[contains(text(), \""+testuser2.username+"\")]"));

        displayname.should.not.be.empty;
        
        await driver.get(address);
        console.log("3");
        //Send an email
        await driver.findElement(By.xpath("/html/body/header/a[1]")).click();

        await driver.findElement(By.xpath("/html/body/form/input")).sendKeys(testemail2.recipient);
        await driver.findElement(By.xpath("/html/body/form/textarea")).sendKeys(testemail2.message);
        await driver.findElement(By.xpath("/html/body/form/button")).click();

        await driver.get(address+"/sentbox");

        let testmessage = await driver.findElements(By.xpath("//*[contains(text(), \""+testemail2.message+"\")]"));

        testmessage.should.not.be.empty;

        await driver.get(address+"/sentbox");
        console.log("4");
        //Display the sent email in the user's sentbox
        let testsentbox = await driver.findElements(By.xpath("//*[contains(text(), \""+testemail2.message+"\")]"));

        testsentbox.should.not.be.empty;

        await driver.get(address);
        console.log("5");
        //Logout, login as user1, and send an email to random user
        await driver.findElement(By.xpath("/html/body/header/a[3]")).click();

        await driver.findElement(By.xpath("/html/body/div/form/input[1]")).sendKeys(user1.username);
        await driver.findElement(By.xpath("/html/body/div/form/input[2]")).sendKeys(user1.password);
        await driver.findElement(By.xpath("/html/body/div/form/button")).click();
        
        await driver.findElement(By.xpath("/html/body/header/a[1]")).click();
        
        await driver.findElement(By.xpath("/html/body/form/input")).sendKeys(testemail3.recipient);
        await driver.findElement(By.xpath("/html/body/form/textarea")).sendKeys(testemail3.message);
        await driver.findElement(By.xpath("/html/body/form/button")).click();
        
        await driver.findElement(By.xpath("/html/body/header/a[3]")).click();

        await driver.get(address);
        console.log("6");
        //Login as random user and check inbox
        await driver.findElement(By.xpath("/html/body/div/form/input[1]")).sendKeys(testuser2.username);
        await driver.findElement(By.xpath("/html/body/div/form/input[2]")).sendKeys(testuser2.password);
        await driver.findElement(By.xpath("/html/body/div/form/button")).click();
        
        let testinboxmessage = await driver.findElements(By.xpath("//*[contains(text(), \""+testemail3.message+"\")]"));

        testinboxmessage.should.not.be.empty;
        console.log("7");
        await driver.quit();
    });
});