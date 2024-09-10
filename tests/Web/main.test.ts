import { GENERATE_RANDOM_DATA } from "../../Constants/constants";
import test from "../../Constants/Fixtures";

test.beforeEach(async ({ homePage }) => {
  await homePage.naviagteToUrl();
});

test("Account Register test", async ({
  homePage,
  createNewCustomerAccountPage,
  myAccountPage,
  elementUtils,
}) => {
  await homePage.clickonCreateAccount();
  await createNewCustomerAccountPage.enterFirstName(
    GENERATE_RANDOM_DATA.FIRSTNAME,
  );
  await createNewCustomerAccountPage.enterLastName(
    GENERATE_RANDOM_DATA.LASTNAME,
  );
  await createNewCustomerAccountPage.enterEmailAddress(
    GENERATE_RANDOM_DATA.EMAILADDRESS,
  );
  await createNewCustomerAccountPage.enterPassword(
    GENERATE_RANDOM_DATA.PASSWORD,
  );
  await createNewCustomerAccountPage.enterConfirmPassowrd(
    GENERATE_RANDOM_DATA.PASSWORD,
  );
  await createNewCustomerAccountPage.clickonCreateAnAccountButton();
  await elementUtils.delayInSeconds(3);
  await myAccountPage.verifyAccountCreatedSuccesfully();
  await myAccountPage.saveCredentailsinTxtFile(
    GENERATE_RANDOM_DATA.EMAILADDRESS,
    GENERATE_RANDOM_DATA.PASSWORD,
  );
});

test("Login test", async ({ homePage, customerLoginPage, elementUtils }) => {
  await homePage.clickOnSigninButton();
  await customerLoginPage.enterEmailAddress("Lexie73@hotmail.com");
  await customerLoginPage.enterPassword("YHIh23Zl7gZ64Em");
  await customerLoginPage.clickonSignIn();
  await elementUtils.delayInSeconds(3);
  await customerLoginPage.verifySuccsfullyLoggedIn();
});
