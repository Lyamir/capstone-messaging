const {Builder, By, Key, ulit, WebDriver, WebElement} = require ("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const assert = require("assert");
const should = require("chai").should();

let address = "http://localhost:8010";

// let post = {
//     title:"Integration Testing",
//     content:"Testing the integration of all modules",
//     author:"Tester"
// }

// let testingUpdate = "Integration Testing Update";

// let testComment = {
//     author: "CommentTester",
//     comment: "Comment testing"
// }

// describe("Unit Tests", async function(){
//     //Tests get functionality of the posts displayed in the homepage
//     it("Homepage should GET all posts", async function(){
//         let options = new firefox.Options();
//         options.addArguments("-headless");
//         let driver = await new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
//         await driver.get(address);

//         let allPosts = await driver.findElements(By.className("postLink"));
//         allPosts.should.not.be.empty;

//         await driver.quit();
//     });

//     //Tests view functionality of a post
//     it("It should display a page", async function(){
//         let options = new firefox.Options();
//         options.addArguments("-headless");
//         let driver = await new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
//         await driver.get(address);

//         await driver.findElement(By.xpath("/html/body/div/a[1]/div")).click();

//         let titleResult = await driver.findElement(By.xpath("/html/body/div/div/div[1]")).getText();
//         let authorResult = await driver.findElement(By.xpath("/html/body/div/div/div[2]")).getText();
//         let dateResult = await driver.findElement(By.xpath("/html/body/div/div/div[3]")).getText();
//         let contentResult = await driver.findElement(By.xpath("/html/body/div/div/div[4]")).getText();

//         let title = "Goodbye World";
//         let author = "Created by: admin";
//         let date = "Created on: Wed Oct 27 2021 00:00:00 GMT+0000 (Coordinated Universal Time)";
//         let content = "This is an updated post";

//         titleResult.should.equal(title);
//         authorResult.should.equal(author);
//         dateResult.should.equal(date);
//         contentResult.should.equal(content);

//         await driver.findElement(By.xpath("/html/body/a[2]")).click();
//         await driver.findElement(By.xpath("/html/body/div/div/form/div/button")).click();

//         await driver.quit();
//     });

//     //Tests if the testing data is already in use
//     it("Testing post should not appear in the homepage", async function(){
//         let options = new firefox.Options();
//         options.addArguments("-headless");
//         let driver = await new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
//         await driver.get(address);

//         let testingPost = await driver.findElements(By.xpath("//*[contains(text(), \""+post.title+"\")]"));

//         testingPost.should.be.empty;

//         await driver.quit();
//     });

//     //Tests create functionality of post
//     it("It should create a post", async function(){
//         let options = new firefox.Options();
//         options.addArguments("-headless");
//         let driver = await new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
//         await driver.get(address);

//         await driver.findElement(By.xpath("/html/body/header/a")).click();

//         await driver.findElement(By.xpath("/html/body/div/div/form/div/input[1]")).sendKeys(post.title);
//         await driver.findElement(By.xpath("/html/body/div/div/form/div/input[2]")).sendKeys(post.author);
//         await driver.findElement(By.xpath("/html/body/div/div/form/div/textarea")).sendKeys(post.content);
//         await driver.findElement(By.xpath("/html/body/div/div/form/div/button")).click();

//         //Test if the post exists in the homepage
//         await driver.navigate().to(address);
//         let resultingElement = await driver.findElements(By.xpath("//*[contains(text(), \""+post.title+"\")]"));
//         resultingElement.should.not.be.empty;

//         await driver.quit();
//     });

//     //Tests update functionality of post
//     it("It should update the created post", async function(){
//         let options = new firefox.Options();
//         options.addArguments("-headless");
//         let driver = await new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
//         await driver.get(address);

//         await driver.findElement(By.xpath("//*[contains(text(), \""+post.title+"\")]")).click();

//         await driver.findElement(By.xpath("/html/body/a[2]")).click();

//         await driver.findElement(By.xpath("/html/body/div/div/form/div/input[1]")).clear();
//         await driver.findElement(By.xpath("/html/body/div/div/form/div/input[1]")).sendKeys(testingUpdate);
//         await driver.findElement(By.xpath("/html/body/div/div/form/div/button")).click();

//         //Test if updates are reflected
//         let resultingTitle = await driver.findElement(By.xpath("/html/body/div/div/div[1]")).getText();
//         resultingTitle.should.equal(testingUpdate);

//         await driver.quit();
//     });

//     //TODO:Tests comment functionality of post
//     it("It should add a comment to the added post", async function(){
//         let options = new firefox.Options();
//         options.addArguments("-headless");
//         let driver = await new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
//         await driver.get(address);

//         await driver.findElement(By.xpath("//*[contains(text(), \""+testingUpdate+"\")]")).click();

//         await driver.findElement(By.xpath("/html/body/div/div/form/input")).sendKeys(testComment.author);
//         await driver.findElement(By.xpath("/html/body/div/div/form/textarea")).sendKeys(testComment.comment);
//         await driver.findElement(By.xpath("/html/body/div/div/form/button")).click();

//         //Test if comment has been added
//         let resultingComment = await driver.findElements(By.xpath("/html/body/div/div/div[5]"));
//         resultingComment.should.not.be.empty;
        
//         await driver.quit();
//     });

//     //Tests delete functionality of post
//     it("It should delete the testing post", async function(){
//         let options = new firefox.Options();
//         options.addArguments("-headless");
//         let driver = await new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
//         await driver.get(address);

//         await driver.findElement(By.xpath("//*[contains(text(), \""+testingUpdate+"\")]")).click();

//         await driver.findElement(By.xpath("/html/body/a[3]")).click();

//         //Test if post has been deleted in homepage
//         await driver.navigate().to(address);
//         let resultingElement = await driver.findElements(By.xpath("//*[contains(text(), \""+testingUpdate+"\")]"));
//         resultingElement.should.be.empty;

//         await driver.quit();
//     });
// });

// describe("Integration Testing", async function(){
//     it("It should test the functionality of Post (Part 1 of Integration Testing)", async function(){
//         let options = new firefox.Options();
//         options.addArguments("-headless");
//         let driver = await new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
//         await driver.get(address);

//         //Checks to see if the testing post is in
//         let testingPost = await driver.findElements(By.xpath("//*[contains(text(), \""+post.title+"\")]"));
//         testingPost.should.be.empty;

//         //Creates the post
//         await driver.navigate().to(address);
//         await driver.findElement(By.xpath("/html/body/header/a")).click();
//         await driver.findElement(By.xpath("/html/body/div/div/form/div/input[1]")).sendKeys(post.title);
//         await driver.findElement(By.xpath("/html/body/div/div/form/div/input[2]")).sendKeys(post.author);
//         await driver.findElement(By.xpath("/html/body/div/div/form/div/textarea")).sendKeys(post.content);
//         await driver.findElement(By.xpath("/html/body/div/div/form/div/button")).click();
        
//         //Checks if the post is created
//         await driver.navigate().to(address);
//         let resultingElement = await driver.findElements(By.xpath("//*[contains(text(), \""+post.title+"\")]"));
//         resultingElement.should.not.be.empty;

//         //Updates the created post
//         await driver.navigate().to(address);
//         await driver.findElement(By.xpath("//*[contains(text(), \""+post.title+"\")]")).click();
//         await driver.findElement(By.xpath("/html/body/a[2]")).click();
//         await driver.findElement(By.xpath("/html/body/div/div/form/div/input[1]")).clear();
//         await driver.findElement(By.xpath("/html/body/div/div/form/div/input[1]")).sendKeys(testingUpdate);
//         await driver.findElement(By.xpath("/html/body/div/div/form/div/button")).click();
        
//         //Test if updates are reflected
//         let resultingTitle = await driver.findElement(By.xpath("/html/body/div/div/div[1]")).getText();
//         resultingTitle.should.equal(testingUpdate);

//         //TODO: Add testing for comment functionality
//         //Adds a comment
//         await driver.navigate().to(address);
//         await driver.findElement(By.xpath("//*[contains(text(), \""+testingUpdate+"\")]")).click();

//         await driver.findElement(By.xpath("/html/body/div/div/form/input")).sendKeys(testComment.author);
//         await driver.findElement(By.xpath("/html/body/div/div/form/textarea")).sendKeys(testComment.comment);
//         await driver.findElement(By.xpath("/html/body/div/div/form/button")).click();

//         //Test if comment has been added
//         let resultingComment = await driver.findElements(By.xpath("/html/body/div/div/div[5]"));
//         resultingComment.should.not.be.empty;
        
//         await driver.quit();
//     });
//     it("Delete the testing post (Part 2 of Integration Testing)", async function(){
//         let options = new firefox.Options();
//         options.addArguments("-headless");
//         let driver = await new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
//         await driver.get(address);

//         //Delete the post test
//         await driver.navigate().to(address);
//         await driver.findElement(By.xpath("//*[contains(text(), \""+testingUpdate+"\")]")).click();
//         await driver.findElement(By.xpath("/html/body/a[3]")).click();

//         //Test if post has been deleted in homepage
//         await driver.navigate().to(address);
//         let resultingElement = await driver.findElements(By.xpath("//*[contains(text(), \""+testingUpdate+"\")]"));
//         resultingElement.should.be.empty;

//         await driver.quit();
//     });
// });