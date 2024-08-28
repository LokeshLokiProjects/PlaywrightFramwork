import { Locator, Page } from "playwright";

export default class ElementUtils {
  constructor(private readonly page: Page) {}

  async datePicker(
    monthJK: string,
    yearJK: string,
    datePicker: string,
    monthLocator: Locator,
    yearLocator: Locator,
    nextClickLocator: Locator,
  ) {
    while (true) {
      let month = await monthLocator.textContent();
      let year = await yearLocator.textContent();

      if (monthJK == month && yearJK == year) {
        break;
      }

      await nextClickLocator.click();
    }

    await this.page.getByRole("link", { name: datePicker }).click();
  }

  async acceptAlert(messageToSend: string, clickable?: Locator) {
    this.page.on("dialog", (dialog) => {
      console.log(dialog.message());
      console.log(dialog.type());
      console.log(dialog.defaultValue());
      dialog.accept(messageToSend);
    });

    await clickable?.click();
  }

  async dismissAlert(clickable?: Locator) {
    this.page.on("dialog", (dialog) => {
      dialog.dismiss();
    });

    await clickable?.click();
  }

  async delayInSeconds(seconds: number) {
    let time = seconds * 1000;
    await this.page.waitForTimeout(time);
  }
}
