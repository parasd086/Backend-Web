class LoginPage {
  get username() {
    return $("#username");
  }
  get password() {
    return $("#password");
  }
  get loginButton() {
    return $('button[type="submit"]');
  }
  get messageBox() {
    return $("#flash");
  }

  async login(username, password) {
    await this.username.setValue(username);
    await this.password.setValue(password);
    await this.loginButton.click();
  }

  async checkLoginMessage(message) {
    await expect(this.messageBox).toHaveTextContaining(message);
  }
}

module.exports = new LoginPage();
