//requiring the connection to the database
const connection = require("./connection.js");

// creating different fuctions for each connection querys, inputing them into an object so it can be exported
const selectAll = function(res){
	connection.query("SELECT * FROM burgers", function(err, data) {
		if (err){
			throw err;
		}

		res.render("index", { burgerList: data });
	});
};

const insertOne = function(res, burgerName){
	connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [burgerName], function(err, result) {
    if (err) {
      throw err;
    }

    res.redirect("/");
  });
};

const updateOne = function(res, burgerID){
	connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [true, burgerID], function(err, result) {
    if (err) {
      throw err;
    }

    res.redirect("/");
  });
};

const end = function(){
	connection.end();
};

const ORM = {
	selectAll: selectAll,
	insertOne: insertOne,
	updateOne: updateOne,
	end: end
};

module.exports = ORM;
