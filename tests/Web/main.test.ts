import { GENERATE_RANDOM_DATA } from "../../Constants/constants";
import test from "../../Constants/Fixtures";

test("Account Register test", async ({
  homePage,
  createNewCustomerAccountPage,
  myAccountPage,
  elementUtils,
}) => {
  await homePage.naviagteToUrl();
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


test.only("", async({page}) => {
  
})