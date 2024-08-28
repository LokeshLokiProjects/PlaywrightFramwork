import { Page } from "playwright";

export default class ProductPage{

    constructor(private readonly page: Page){
        
    }

    async clickonAddtoCart(){
        await this.page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
    }

    async clickonCartIcon(){
        await this.page.getByRole('link', { name: '1' }).click();
    }
}