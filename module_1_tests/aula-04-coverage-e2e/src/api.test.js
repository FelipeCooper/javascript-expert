const { describe, it } = require("mocha");
const request = require("supertest");
const app = require("./api");
const assert = require("assert");
describe("API test suit", () => {
  describe("/contact", () => {
    it("should request the contact page us and return http status 200", async () => {
      const response = await request(app).get("/contact").expect(200);
      assert.deepStrictEqual(response.text, "contact us page");
    });
    it("should request an inexsistent route /hi and redirect to /hello", async () => {
      const response = await request(app).get("/hi").expect(200);
      assert.deepStrictEqual(response.text, "Hello world");
    });
  });
  describe("/login", () => {
    it("should login sucessfully on the login route and return the Status 200", async () => {
      const response = await request(app)
        .post("/login")
        .send({ username: "zoro", password: "123" })
        .expect(200);
      assert.deepStrictEqual(response.text, "Login has succeded");
    });
    it("should login failed on the login route and return the Status 401 unauthorized", async () => {
      const response = await request(app)
        .post("/login")
        .send({ username: "luffy", password: "444" })
        .expect(401);
      assert.ok(response.unauthorized);
      assert.deepStrictEqual(response.text, "Logging Failed");
    });
  });
});
