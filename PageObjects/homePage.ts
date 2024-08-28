import { Page } from "playwright";
import * as DATA from '../Constants/TESTDATA.json'

export default class HomePage{


    constructor(private readonly page: Page){


    }

    //loctors

    async clickOnMyAccount(){
        await this.page.getByRole('link', { name: ' My Account' }).click()
    }


    async navigateToUrl(){
        await this.page.goto(DATA.URL);
    }

    async clickOnRegisterButton(){
        await this.page.getByRole('link', { name: 'Register' }).click();
    }









    
}