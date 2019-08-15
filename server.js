const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, './client/index.html'));
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log("Listening on port:" + PORT);
});