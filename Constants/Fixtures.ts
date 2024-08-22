import {test as base} from "playwright/test";
import ElementUtils from "../utils/ElemntUtils";




type pageObjects = {
    element: ElementUtils
}


const test = base.extend<pageObjects>({
    element: async ({ page }, use) => {
        await use(new ElementUtils(page));
    },
})

export default test;
export const expect = test.expect;