const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/advertisements/";
const sequelize = require("../../src/db/models/index").sequelize;
const Advertisement = require("../../src/db/models").Advertisement;

describe("routes : advertisements", () => {

  beforeEach((done) => {
  this.advertisement;
  sequelize.sync({force: true}).then((res) => {

   Topic.create({
     title: "Ad Frameworks",
     description: "There is a lot of them"
   })
    .then((advertisement) => {
      this.advertisement = advertisement;
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    });

  });

});

  describe("GET /advertisements", () => {

    request.get(base, (err, res, body) => {
      expect(res.statusCode).toBe(200);
      expect(err).toBeNull();
      expect(body).toContain("Advertisements");
      expect(body).toContain("Ad Frameworks");
      done();
    });
  });
});
