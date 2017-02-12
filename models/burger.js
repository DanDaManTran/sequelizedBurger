// This may be confusing but here Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
const mysqlize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Burgers = mysqlize.define("burgers", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  burger_name: {
    type: Sequelize.STRING
  },
  devoured: {
    type: Sequelize.BOOLEAN
  },
  date: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});

// Syncs with DB
Burgers.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Burgers;
