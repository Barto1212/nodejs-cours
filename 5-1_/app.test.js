const supertest = require("supertest");
const app = require("./app.js");
const assert = require("assert/strict");

describe("Test De notre Router", () => {
  it("GET", () => {
    supertest(app).get("/").expect(200);
    // .then((response) => {});
  });
});
