import {test as base} from "playwright/test";
import RegisterPage  from "../PageObjects/RegsiterPage";
import HomePage from "../PageObjects/homePage";
import ElementUtils from "../utils/Utils";




type pageObjects = {
    homePage: HomePage,
    registerPage: RegisterPage,
    elementUtils: ElementUtils

}

const test = base.extend<pageObjects>({

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    registerPage: async ({page} , use) => {
        await use(new RegisterPage(page))
    },

    elementUtils: async ({page} , use) => {
        await use(new ElementUtils(page))
    }

})

export default test;
export const expect = test.expect;
