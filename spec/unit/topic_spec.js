const sequelize = require("../../src/db/models/index").sequelize;
const Topic = require("../../src/db/models").Topic;
const Post = require("../../src/db/models").Post;


describe("Topic", () => {

  beforeEach((done) => {

    this.topic;
    sequelize.sync({force: true}).then((res) => {

      Topic.create({
        title: "Node.js is hard",
        description: "learning Node"
      })
      .then((topic) => {
        this.topic = topic;

        Post.create({
          title: "Node is challenging",
          body: "I liked HTML better",
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

  it("should create a topic with title and description", (done) => {

    Topic.create({
      title:"Javascript was cool",
      description:"Pros and cons of javascript",
      topicId: this.topic.id
    })
    .then((post) => {

      expect(topic.title).toBe("Javascript was cool");
      expect(topic.description).toBe("Pros and cons of javascript");
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    });

  });
});

describe("#getPosts()", () => {

  it("should return all posts associated with a topic", (done) => {
    console.log(`DEBUG:\n${this.topic}\n\n`);
    this.topic.getPosts()
    .then((associatedPosts) => {
      expect(associatedPosts.title).toContain("Node is challenging");
      done();
    });
  });

});

//getPosts topic.getPosts
//presents array of post objects

});
