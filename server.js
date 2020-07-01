//Adding dependencies/
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// creating a new express application//
var app = express();
// use port 3000 unless there exists a preconfigured port
var port = process.env.port || 3000;


app.use(bodyparser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+jason"}));
app.use(express.static("app/public"));

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

app.listen(port, () => console.log("Listening", port));

