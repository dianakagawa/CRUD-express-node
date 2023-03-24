const express = require("express");
const prisma = require("./config/prisma.config");

const userRoutes = require("./routes/user.routes");

const PORT = 8000;

const app = express();
app.use(express.json());

// send a message to the root of our API to test that everything is working
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", userRoutes);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
