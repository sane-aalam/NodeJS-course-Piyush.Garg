const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const app = express();
const port = 3000;

// Dynamic Routes
// The server has a route defined that matches the pattern /api/users/:id. The :id part is the dynamic parameter, indicating that any value in that position will be captured.
// This value is then made available to the route's handler function, typically as part of the req.params object (e.g., req.params.id)

// MIDDLE_WARE
// Work - url data put into body
// To access the url data
app.use(express.urlencoded({ extended: false }));

// REST
app.get("/users", (req, res) => {
  const html = `<ul>
  ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>`;
  res.send(html);
});

// ALL USERS
app.get("/api/users", (req, res) => {
  res.json(users);
});

// GROUPING ALL ROUTES - with same paths
app.route("/api/users/:id").get((req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

// POST/api/users - create new users
// PUSH DATA INTO THE TEXT file
app.post("/api/users/", (req, res) => {
  const body = req.body;
  users.push({ id: users.length + 1, ...body });
  fs.writeFile("./Mock_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "pending", id: users.length });
  });
});

// PATCH
app.patch("/api/users/:id", (req, res) => {
  return res.json({ status: "pending" });
});

// DELETE
app.delete("/api/users/:id", (req, res) => {
  return res.json({ status: "pending" });
});

// LISTEN
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
