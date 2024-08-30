import { test as base } from "@playwright/test";
import CreateNewCustomerAccountPage from "../PageObjects/createNewCustomerAccountPage";
import HomePage from "../PageObjects/homePage";
import MyAccountPage from "../PageObjects/myAccountPage";
import ElementUtils from "../utils/elementUtils";

type pageObjects = {
  createNewCustomerAccountPage: CreateNewCustomerAccountPage;
  homePage: HomePage;
  myAccountPage: MyAccountPage;
  elementUtils: ElementUtils;
};

const test = base.extend<pageObjects>({
  createNewCustomerAccountPage: async ({ page }, use) => {
    await use(new CreateNewCustomerAccountPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  myAccountPage: async ({ page }, use) => {
    await use(new MyAccountPage(page));
  },
  elementUtils: async ({ page }, use) => {
    await use(new ElementUtils(page));
  },
});

export default test;
export const expect = test.expect;
