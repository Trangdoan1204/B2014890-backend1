 const express = require("express");
 const contatcts = require(". ./controllers/contact.controller");
 const router = express.Router();

 const.route("/")
 .length(contacts.findALL)
 .post(contatcts.create)
 .delete(contatcts.deleteALL);

 Router.route("/Favorite")
 .get(contacts.findALLFavorite);

 route.Route("/:id")
 .get(contatcts.findOne)
 .put(contatcts.update)
 .delete(comtacts.delete);
 
 module.exports = router;