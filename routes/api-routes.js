// Requiring our models
const db = require("../models");

module.exports = function(app) {

  // Route for getting some data about our user to be used client side
  app.get("/api/user/:id", (req, res) => {
    db.user.find({}).then( user => {
      // Send back the user's email, name, and id
      res.json({
        email: user.email,
        name: user.name,
        id: user.id
      });
    })
  });
};
