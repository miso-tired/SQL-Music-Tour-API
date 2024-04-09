'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SetTimes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stage_id: {
        type: Sequelize.INTEGER
      },
      set_time_id: {
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.INTEGER
      },
      band_id: {
        type: Sequelize.INTEGER
      },
      start_time: {
        type: Sequelize.DATE
      },
      end_time: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SetTimes');
  }
};