//creating a virtue table so sequelize can run properly
module.exports = function(sequelize, DataTypes){
  var User = sequelize.define("burgers", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      burger_name: {
        type: DataTypes.STRING
      },
      devoured: {
        type: DataTypes.BOOLEAN
      },
      date: {
        type: DataTypes.DATE
      }
    }, {
      timestamps: false
    });
    return User;
}
