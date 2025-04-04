const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "John", email: "john@gmail.com" },
  { id: 1, name: "Abraham", email: "john@gmail.com" },
  { id: 1, name: "A", email: "a@gmail.com" },
  { id: 1, name: "B", email: "b@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Server is cooking on port ${port}`);
});
