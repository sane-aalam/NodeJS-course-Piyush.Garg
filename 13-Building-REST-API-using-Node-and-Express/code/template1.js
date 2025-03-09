const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const port = 3000;

// case-1 user can get route /users - render HTML
// case-2 user can get route /api/users - redner JSON data
// Dynamic Routes
// The server has a route defined that matches the pattern /api/users/:id. The :id part is the dynamic parameter, indicating that any value in that position will be captured.
// This value is then made available to the route's handler function, typically as part of the req.params object (e.g., req.params.id)

// REST
app.get("/users", (req, res) => {
  const html = `<ul>
  ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>`;
  res.send(html);
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

// POST/api/users - create new users
app.post("/api/users/:id", (req, res) => {
  return res.json({ status: "pending" });
});

app.delete("/api/users/:id", (req, res) => {
  return res.json({ status: "pending" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
