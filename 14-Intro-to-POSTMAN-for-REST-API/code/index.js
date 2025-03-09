const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const app = express();
const PORT = 3000;

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
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .put((req, res) => {
    return res.json({});
  })
  .delete((req, res) => {
    return res.json({});
  });

// GET
app.get("/api/users/:id", (req, res) => {
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

app.patch("/api/users/update", (req, res) => {
  const queryParams = req.query; // Extract query parameters from the request
  const userId = parseInt(queryParams.id); // Assuming 'id' is provided in the query parameters
  if (!userId) {
    return res
      .status(400)
      .json({ error: "User ID is required in the query parameters" });
  }

  // Find the index of the user with the given ID
  const userIndex = users.findIndex((user) => user.id === userId);

  // If user not found, return error
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  // Update user data with the new information from query parameters
  users[userIndex] = { ...users[userIndex], ...queryParams };

  // Write updated user data to file
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json({ status: "success", id: userId });
  });
});

app.delete("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id); // Parse ID from request params

  // Find the index of the user with the given ID
  const userIndex = users.findIndex((user) => user.id === userId);

  // If user not found, return error
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  // Remove the user with the specified ID from the array
  users.splice(userIndex, 1);

  // Write updated user data to file
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json({ status: "success", id: userId });
  });
});

// LISTEN
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
