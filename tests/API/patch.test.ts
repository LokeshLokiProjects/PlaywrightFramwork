import { test, expect } from "playwright/test";

const baseUrl = "https://reqres.in/";
const patchEndpoint = "api/users/2";
const patchBody = {
  name: "morpheus",
  job: "zion resident",
};

test("Patch Request", async ({ request }) => {
  const response = await request.patch(`${baseUrl}${patchEndpoint}`, {
    data: patchBody,
  });

  console.log(await response.json());

  expect(response.status()).toBe(200);
});
