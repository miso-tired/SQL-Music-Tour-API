'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate({ Stage, StageEvent }) {
        // stages
        Event.belongsToMany(Stage, {
            foreignKey: "event_id",
            as: "stages", 
            through: StageEvent
        })
    }
}
  Event.init({
    event_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};