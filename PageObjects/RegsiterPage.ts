import { Page } from "playwright";
import { expect } from "playwright/test";

export default class RegisterPage{

    constructor(private readonly page: Page){

    }

    async enterFirstName(firstName: string){
        await this.page.getByPlaceholder('First Name').fill(firstName);
    }

    async enterLastName(lastName: string){
        await this.page.getByPlaceholder('Last Name').fill(lastName);
    }

    async enterEmailAddress(emailAddress: string){
        await this.page.getByPlaceholder('E-Mail').fill(emailAddress);
    }

    async enterTelphoneNumber(telephoneNumber: string){
        await this.page.getByPlaceholder('Telephone').fill(telephoneNumber);
    }

    async enterPassword(password: string){
        await this.page.getByPlaceholder('Password', { exact: true }).fill('Lok999@#/');
    }

    async enterConfirmPassword(confirmPassword: string){
        await this.page.getByPlaceholder('Password Confirm').fill(confirmPassword);
    }

    async subscribeNoCheckBox(){
        await this.page.getByLabel('No').check();
    }

    async subscribeYesCheckBox(){
        await this.page.getByLabel('Yes').check();
    }

    async privacyPolicyCheckBox(){
        await this.page.getByRole('checkbox').check();
    }

    async verifyAfterRegister(){
        await expect(this.page.locator('#content')).toContainText('Your Account Has Been Created!');
    }

    async clickOnContinue(){

        await this.page.getByRole('button', { name: 'Continue' }).click()
    }


}