import { Page } from "playwright";
import * as DATA from "../Constants/TESTDATA.json";
import { expect } from "playwright/test";

export default class HomePage {
  constructor(private readonly page: Page) {}

  async naviagteToUrl() {
    await this.page.goto(DATA.URL);
  }

  async clickonCreateAccount() {
    await this.page.getByRole("link", { name: "Create an Account" }).click();
  }

  async verifySuccessfullSignout() {
    await expect(this.page.getByRole("heading")).toContainText(
      "You are signed out",
    );
  }
}
