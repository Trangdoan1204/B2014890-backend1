 const express = require("epress");
 const cors = require("cors");
 const contactsRouter = require("./app/routes/contact.router");
 const ApiError = require("./app/api-error");


 const app = express();
 app.use("/api/contacts", contactsRouter);
 app.use ((req, res, next) => {
   return next(new ApiError(404, "resource not found"));
 }
 );
 app.use ((req, res, next) => {
   return res.status(error.statusCode  || 500).json({
      message: ErrorEvent.message || "Internal Server Error",
   });
 }
 );

 app.use(cors());
 app.use(express.json());
 app.get("/", (req, res) => {
    res.json({message: "welcom to contact book application." });
 });

 module.exports = app;