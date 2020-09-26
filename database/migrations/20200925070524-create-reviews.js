'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      game_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Games',
          key: 'id'
        },
        onUpdate: 'cascade'
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'cascade'      },
      recommended: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      body: {
        allowNull: false,
        type: Sequelize.STRING
      },
      helpful_count: {
        defaultValue: null,
        type: Sequelize.INTEGER
      },
      funny_count: {
        defaultValue: null,
        type: Sequelize.INTEGER
      },
      comments_count: {
        defaultValue: null,
        type: Sequelize.INTEGER
      },
      awards: {
        defaultValue: '{"Treasure":0,"Mind Blown":0,"Golden Unicorn":0,"Deep Thoughts":0,"Heartwarming":0,"Hilarious":0,"Hot Take":0,"Poetry":0,"Extra Helpful":0}',
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Reviews');
  }
};