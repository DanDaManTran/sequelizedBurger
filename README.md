# sequelizedBurger

## Week 15 Assignment - Burger 2: The Sequel!

Link: https://squelizedburgersdan.herokuapp.com/

This is a burger logger that keeps track of all the burgers you want to eat and have ate. For the list that you want to eat there is a devour button that will update the database that the burger has been eaten.

Using MySQL to keep track of the burgers. Using Node for the backend experience. Express to host the page. Handlebars to create the page. We will also be using sequelize. Sequelize is a easy to use MySQL set up.


## Installing

After cloning this

```
npm install
```

## Setting Up

then you will need to create a key.js file in the same directory as the server.js. Inside the key.js file you will enter in your mysql password with the following format.

```
const key = {
	mysql: "YOURMYSQLPASSWORD"
};

module.exports = key;
```

You should also go into the ```config/config.json``` to double check then connection's informations

In the db directory you will notice the schema and seed for the sql database.

After you got your database set up, navigate to the ```models/index.js```. In there uncomment line 12-18

```
if (require("../key.js")){
  var kee = require("../key.js");

  if (env==="development") {
    config.password = kee.mysql;
  }
}
```

We have that comment out due to development errors to heroku. 

## Running It

You will want to ```node server.js``` and go to your localhost:5000. There you will be able to log all the burgers you ate.

HAVE FUN BURGER EATING
