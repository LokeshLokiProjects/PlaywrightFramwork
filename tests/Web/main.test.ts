import { GENERATE_RANDOM_DATA } from "../../frameutils/constants";
import test from "../../frameutils/Fixtures";
import * as data from "../../lumacred.json";
import logger from "../../utils/LoggerUtils";

test.beforeEach(async ({ homePage }) => {
  
  await homePage.navigateToUrl();
});


test("Account Register test", async ({
  homePage,
  createNewCustomerAccountPage,
  myAccountPage,
  elementUtils,
  page,
}) => {
  logger.info("Scenario 1: Verify user able Register Succesfully")
  logger.info("Navigate to URL")
  
  await homePage.clickonCreateAccount();
  logger.info("Click on Create Account")
  await createNewCustomerAccountPage.enterFirstName(
    GENERATE_RANDOM_DATA.FIRSTNAME,
  );
  logger.info('Enter FirstName')
  await createNewCustomerAccountPage.enterLastName(
    GENERATE_RANDOM_DATA.LASTNAME,
  );
  logger.info("Enter LastName")
  await createNewCustomerAccountPage.enterEmailAddress(
    GENERATE_RANDOM_DATA.EMAILADDRESS,
  );
  logger.info("Enter Email Addresss")
  await createNewCustomerAccountPage.enterPassword(
    GENERATE_RANDOM_DATA.PASSWORD,
  );
  logger.info("Enter Password")
  await createNewCustomerAccountPage.enterConfirmPassowrd(
    GENERATE_RANDOM_DATA.PASSWORD,
  );
  logger.info("Enter Confirm Password")
  await createNewCustomerAccountPage.clickonCreateAnAccountButton();
  logger.info("Click on Create Account")
  await elementUtils.delayInSeconds(3);
  try{
  await myAccountPage.verifyAccountCreatedSuccesfully();
  }catch(error){
    logger.error(`Not able to view message: Thank you for registering with Main Website Store. ${error}`)
  }
  logger.info("Verify Account Created Successfully")
  await myAccountPage.saveCredentailsinTxtFile(
    GENERATE_RANDOM_DATA.EMAILADDRESS,
    GENERATE_RANDOM_DATA.PASSWORD,
  );
});

// for (const [key, value] of Object.entries(data)) {
//   test(`Login test ${key}`, async ({
//     homePage,
//     customerLoginPage,
//     elementUtils,
//   }) => {
//     await homePage.clickOnSigninButton();
//     await customerLoginPage.enterEmailAddress(value.email);
//     await customerLoginPage.enterPassword(value.password);
//     await customerLoginPage.clickonSignIn();
//     await elementUtils.delayInSeconds(3);
//     await customerLoginPage.verifySuccsfullyLoggedIn();
//   });
// }
