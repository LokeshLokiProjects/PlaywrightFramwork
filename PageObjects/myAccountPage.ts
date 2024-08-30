import { Page } from "playwright";
import { expect } from "playwright/test";
import DataUtils from "../utils/dataUtils";

export default class MyAccountPage {
  constructor(private readonly page: Page) {}

  async verifyAccountCreatedSuccesfully() {
    await expect(this.page.getByRole("alert")).toContainText(
      "Thank you for registering with Main Website Store.",
    );
  }

  async saveCredentailsinTxtFile(email: string, password: string) {
    DataUtils.writeDataToTextFile(
      "./lumacredentials.txt",
      email + " | " + password,
      "appedfile",
    );
  }

  async clickonDropDown() {
    await this.page
      .getByRole("banner")
      .locator("button")
      .filter({ hasText: "Change" })
      .click();
  }

  async clickonSignout() {
    await this.page.getByRole("link", { name: "Sign Out" }).click();
  }
}
