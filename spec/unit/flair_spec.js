const sequelize = require("../../src/db/models/index").sequelize;
const Topic = require("../../src/db/models").Topic;
const Flair = require("../../src/db/models").Flair;


describe("Flair", () => {

  beforeEach((done) => {
//#1
    this.topic;
    this.post;
    sequelize.sync({force: true}).then((res) => {

//#2
      Topic.create({
        title: "Holiday Movies",
        description: "Lets talk about christmas."
      })
      .then((topic) => {
        this.topic = topic;
//#3
        Flair.create({
          name: "Movies",
          color: "orange"
//#4
          topicId: this.topic.id
        })
        .then((post) => {
          this.post = post;
          done();
        });
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });

  });

  describe("#create()", () => {

    it("should assign a color flair to a post", (done) => {

      Flair.create({
        name: "Movies",
        color: "orange",
        topicId: this.topic.topicId
      })
      .then((flair) => {

        expect(flair.name).toBe("Movies");
        expect(flair.color).toBe("orange");
        done();
      })

      .catch((err) ={
        console.log(err);
        done();
      });
    });
  });
});
