const express = require("express");
const app = express();
const port = 5000;

app.get("/", function (req, res) {
  res.send("Hello world!");
});

app.get("/restaurants", function (req, res) {
  res.send("restaurants all data");
});

app.get("/cards", function (req, res) {
  res.send("all cards render!");
});

// http://localhost:5000/cardInfo?userFamily=Muslim&userCity=Up&userMembers=5&invitation=yes
app.post("/cardInfo", function (req, res) {
  const userName = req.query.numberCards;
  const userFamily = req.query.userFamily;
  const userCity = req.query.userCity;
  const userMembers = req.query.userMembers;
  const invitation = req.query.invitation;
  res.json({
    userName,
    userFamily,
    userCity,
    userMembers,
    invitation,
  });
});
// JSON 
// {
//     "userFamily": "Muslim",
//     "userCity": "Up",
//     "userMembers": "5",
//     "invitation": "yes"
// }

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
