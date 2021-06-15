const puppeteer = require("puppeteer");

const baseUrl = "http://localhost:3000"

let browser
let page

beforeAll(async () => {
  browser = await puppeteer.launch(
    {
      headless: false,
      slowMo: 500
    }
  )
  page = await browser.newPage()
})

afterAll(() => {
    browser.close()
  })

describe("Todo list", () => {
  it("should allow creation of a new todo item", async () => {
    const newTodoItem = "Run Tests";
    // Load page
    await page.goto(baseUrl);
    // Wait for the page to load
    await page.waitForSelector(".todoapp");
    // Add a new todo item
    await page.type("#new-todo-input", newTodoItem);
    await page.click("button[type=submit]");
    // Retrieve a new todo item
    const allTodoItemsText = await page.evaluate(
        () => {
            const allTodoItems = document.querySelectorAll("label[class=todo-label]");
            return allTodoItems[--allTodoItems.length].textContent;
        });
    // Validate the new item
    expect(allTodoItemsText).toEqual(newTodoItem);
},1000000)});