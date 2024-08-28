import { Page } from "playwright";
import { expect } from "playwright/test";

export default class CartPage{

    constructor(private readonly page: Page){

    }

    async verifyValidProductPresentInCart(){
        await expect(this.page.getByRole('link', { name: 'Sauce Labs Backpack' })).toBeVisible();
    }
}