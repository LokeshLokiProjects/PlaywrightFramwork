import { expect, test } from "playwright/test";

test("Get Request", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users?page=2");

  const json = await response.json();

  expect(json.data[0]).toHaveProperty("email", "michael.lawson@reqres.in");
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  expect(json.data[1].first_name).toContain("Lindsay");
});
