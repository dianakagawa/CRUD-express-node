const express = require("express");
const prisma = require("./config/prisma.config");

const userRoutes = require("./routes/user.routes");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
