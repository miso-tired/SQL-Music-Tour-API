'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MeetGreets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.INTEGER
      },
      band_id: {
        type: Sequelize.INTEGER
      },
      meet_greet_id: {
        type: Sequelize.INTEGER
      },
      meet_start_time: {
        type: Sequelize.DATE
      },
      meet_end_time: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MeetGreets');
  }
};