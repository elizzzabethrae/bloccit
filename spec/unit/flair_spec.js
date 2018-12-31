// const sequelize = require("../../src/db/models/index").sequelize;
// const Post = require("../../src/db/models").Post;
// const Topic = require ("../../src/db/models").Topic;
// const Flair = require("../../src/db/models").Flair;
//
// describe("Flair", () => {
//
//   beforeEach((done) => {
// //#1
//     this.post;
//     this.flair;
//     this.topic;
//     sequelize.sync({force: true}).then((res) => {
//
//       Topic.create({
//          title: "Favorite Movies",
//          description: "lets talk about movies."
//        })
//        .then((topic) => {
//          this.topic = topic;
//  //#3
//          Post.create({
//            title: "Christmas Movies",
//            body: "The Grinch is my favorite",
//  //#4
//            topicId: this.topic.id
//          })
//          .then((post) => {
//            this.post = post;
//            done();
//          });
//          Flair.create({
//            name: "Movies",
//            color: "Red",
//            postId: this.post.id
//          })
//          .then((flair) => {
//            this.flair = flair;
//            done();
//          });
//        })
//        .catch((err) => {
//          console.log(err);
//          done();
//        });
//      });
//
//    });
//
//    describe("#create()", () => {
//
//     it("should create a flair with associated post", (done) => {
// //#1
//       Flair.create({
//         name: "Presents",
//         color: "green",
//         post: this.post
//       })
//       .then((flair) => {
//
// //#2
//         expect(flair.name).toBe("Presents");
//         expect(flair.color).toBe("green");
//         expect(postId).toBe("Christmas Movies");
//         done();
//
//       })
//       .catch((err) => {
//         console.log(err);
//         done();
//       });
//     });
//
//   });
//
//   it("should create a flair with missing name and color", (done) => {
//     Flair.create({
//       title: "Dogs"
//     })
//     .then((flair) => {
//       done();
//     })
//     .catch((err) => {
//       expect(err.message).toContain("Flair.color cannot be null");
//       expect(err.message).toContain("Flair.postId cannot be null")
//       done();
//     })
//   })
//
// });
