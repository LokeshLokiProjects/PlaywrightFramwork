import { Page } from "playwright";

export default class CreateNewCustomerAccountPage {
  constructor(private readonly page: Page) {}

  async enterFirstName(firstName: string) {
    await this.page.getByLabel("First Name").fill(firstName);
  }

  async enterLastName(lastName: string) {
    await this.page.getByLabel("Last Name").fill(lastName);
  }

  async enterEmailAddress(emailId: string) {
    await this.page.getByLabel("Email", { exact: true }).fill(emailId);
  }

  async enterPassword(password: string) {
    await this.page
      .getByRole("textbox", { name: "Password*", exact: true })
      .fill(password);
  }

  async enterConfirmPassowrd(password: string) {
    await this.page.getByLabel("Confirm Password").fill(password);
  }

  async clickonCreateAnAccountButton() {
    await this.page.getByRole("button", { name: "Create an Account" }).click();
  }
}
