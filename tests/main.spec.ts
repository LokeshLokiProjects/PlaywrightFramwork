import test from '../Constants/Fixture'
import * as DATA from '../Constants/TESTDATA.json'

test("979898798", async({productsPage, loginPage , cartPage}) => {
    await loginPage.naviagteToUrl(DATA.URL)
    await loginPage.enterLoginId(DATA.LOGIN_ID)
    await loginPage.enterPassword(DATA.PASSWORD)
    await loginPage.clickonLogin()
    await productsPage.clickonAddtoCart()
    await productsPage.clickonCartIcon()
    await cartPage.verifyValidProductPresentInCart()
})