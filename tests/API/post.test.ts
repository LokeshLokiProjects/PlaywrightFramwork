import { test ,expect } from "playwright/test";

test("Post Request", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    data: {
      name: "morpheus",
      job: "zion resident",
    },
  });

  const data = await response.json();

  console.log(data);

  expect(data.name).toContain("morpheus");
  expect(data.job).toBe("zion resident");

  expect(response.status()).toBe(201);
});
