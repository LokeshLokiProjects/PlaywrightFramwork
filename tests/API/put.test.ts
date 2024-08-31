import { test, expect } from "playwright/test";

test("Delete Request", async ({ request }) => {
  const response = await request.put("https://reqres.in/api/users/2", {
    data: {
      name: "morpheus",
      job: "zion resident",
    },
  });

  console.log(await response.json());
  expect(response.status()).toBe(200);
});
