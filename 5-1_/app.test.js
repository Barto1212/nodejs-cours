const supertest = require("supertest");
const app = require("./app.js");
const assert = require("assert/strict");
const mongo = require("./utils/mongo.js");

describe("Test De notre Routeur", () => {
  // Initialiser mongoDB avant les tests :
  before(mongo.connect);
  // On se déconnecte à la fin :
  after(mongo.disconnect);

  it("GET", () => {
    return supertest(app)
      .get("/")
      .expect(200)
      .then((response) => {
        assert.equal(typeof response.body, "object");
        response.body.forEach((user) => {
          const props = Object.keys(user).join("-");
          assert.equal(props, "_id-email-pwd-cart-__v");
        });
      });
  });
});
