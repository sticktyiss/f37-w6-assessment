const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("Clicking the draw button shows 5 robots", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
    await driver.findElement(By.id("draw")).click();
    await driver.sleep(2000);
  });
  test("clicking 'add to your duo' on a robot shows the robot in the 'your duo' section", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
    await driver.findElement(By.id("draw")).click();
    await driver.sleep(2000);
    console.log(driver.findElement(By.css("button[class=bot-btn]")))
    await driver.findElement(By.css("button[class=bot-btn]")).click();
    await driver.sleep(2000);
  });
});