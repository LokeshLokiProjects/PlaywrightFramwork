import { Page } from "playwright";

export default class LoginPage {
  constructor(private readonly page: Page) {}

  async naviagteToUrl(url: string) {
    await this.page.goto(url);
  }

  async enterLoginId(loginId: string) {
    await this.page.locator('[data-test="username"]').fill(loginId);
  }

  async enterPassword(password: string) {
    await this.page.locator('[data-test="password"]').fill(password);
  }

  async clickonLogin() {
    await this.page.getByRole("button", { name: "LOGIN" }).click();
  }
}
