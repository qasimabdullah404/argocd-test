const express = require("express");
const logger = require("morgan");

const app = express();

app.use(express.json());
app.use(logger("combined"));

const PORT = 8081;

app.get("/", (req, res) => res.status(200).json({ info: "Hello From v3" }));

app.listen(PORT, () => console.log("Server running..."));
