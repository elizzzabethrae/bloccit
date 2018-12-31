'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Flairs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      color: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      postId: {
          type: Sequelize.INTEGER,
          onDelete: "CASCADE", // delete post if parent topic is deleted
          allowNull: false,    // validation to prevent null value
          references: {        // association information
            model: "Posts",   // table name
            key: "id",         // attribute to use
            as: "postId"      // reference as topicId
          },
        },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Flairs');
  }
};
