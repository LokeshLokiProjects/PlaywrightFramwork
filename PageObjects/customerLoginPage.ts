import { Page } from "playwright";
import { expect } from "playwright/test";

export default class CustomerLoginPage {
  constructor(private readonly page: Page) {}

  async enterEmailAddress(email: string) {
    await this.page.getByLabel("Email", { exact: true }).fill(email);
  }

  async enterPassword(password: string) {
    await this.page.getByLabel("Password").fill(password);
  }

  async clickonSignIn() {
    await this.page.getByRole("button", { name: "Sign In" }).click();
  }

  async verifySuccsfullyLoggedIn() {
    await this.page
      .getByRole("banner")
      .locator("button")
      .filter({ hasText: "Change" })
      .click();
    await expect(
      this.page.getByRole("link", { name: "Sign Out" }),
    ).toBeVisible();
  }

  //
  //
}
