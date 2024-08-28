import { test as base } from "@playwright/test";
import CartPage from "../PageObjects/cartPage";
import LoginPage from "../PageObjects/LoginPage";
import ProductPage from "../PageObjects/productsPage";

const test = base.extend<{
  cartPage: CartPage;
  loginPage: LoginPage;
  productsPage: ProductPage;
}>({
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
});

export default test;
export const expect = test.expect;
