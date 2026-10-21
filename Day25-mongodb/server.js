const express = require("express");

const {connection} = require("./config/db.js");
const {routes} = require("./routes/student.routes.js");

const app = express();
app.use(express.json());
app.use("/", routes);

app.listen(8000, async () => {
  try {
    await connection;
    console.log("Connected to MongoDB");
    console.log("Server is running on port 8000");
  } catch (error) {
    console.error("Error starting server:", error);
  }
})
