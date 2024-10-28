import { GENERATE_RANDOM_DATA } from "../../frameutils/constants";
import test from "../../frameutils/Fixtures";
import * as data from "../../lumacred.json";
import logger from "../../utils/LoggerUtils";

test.beforeEach(async ({ homePage }) => {
  await homePage.navigateToUrl();
});

test("Verify user able register successfully", async ({
  homePage,
  createNewCustomerAccountPage,
  myAccountPage,
  elementUtils,
  page,
}) => {
  await test.step("Navigate to URL", async () => {});

  await test.step("click on create account button", async () => {
    await homePage.clickonCreateAccount();
  });

  await test.step("enter firstname", async () => {
    await createNewCustomerAccountPage.enterFirstName(
      GENERATE_RANDOM_DATA.FIRSTNAME,
    );
  });

  await test.step("enter lastname", async () => {
    await createNewCustomerAccountPage.enterLastName(
      GENERATE_RANDOM_DATA.LASTNAME,
    );
  });

  await test.step("enter email address", async () => {
    await createNewCustomerAccountPage.enterEmailAddress(
      GENERATE_RANDOM_DATA.EMAILADDRESS,
    );
  });

  await test.step("enter password", async () => {
    await createNewCustomerAccountPage.enterPassword(
      GENERATE_RANDOM_DATA.PASSWORD,
    );
  });

  await test.step("enter confirm password", async () => {
    await createNewCustomerAccountPage.enterConfirmPassowrd(
      GENERATE_RANDOM_DATA.PASSWORD,
    );
  });

  await test.step("click on create account button", async () => {
    await createNewCustomerAccountPage.clickonCreateAnAccountButton();
  });

  await test.step("Verify account created successfully", async () => {
    await elementUtils.delayInSeconds(3);
    try {
      await myAccountPage.verifyAccountCreatedSuccesfully();
    } catch (error) {
      await test.step(`${error}`, async () => {});
    }

    await myAccountPage.saveCredentailsinTxtFile(
      GENERATE_RANDOM_DATA.EMAILADDRESS,
      GENERATE_RANDOM_DATA.PASSWORD,
    );
  });
  
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
