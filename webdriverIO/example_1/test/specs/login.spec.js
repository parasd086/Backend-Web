const LoginPage = require("../pages/login.page");

describe("Demo login test", () => {
  it("Login test", async () => {
    browser.url("https://the-internet.herokuapp.com/login");

    await LoginPage.login("tomsmith", "SuperSecretPassword!");
    await LoginPage.checkLoginMessage("You logged into a secure area!");

    // await $("#username").setValue("tomsmith");
    // await $("#password").setValue("SuperSecretPassword!");
    // await $('button[type="submit"]').click();
    // await expect($("#flash")).toHaveTextContaining(
    //   "You logged into a secure area!"
    // );
  });
});
