//import express and export it as the express function
const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const products = require("./routes/productRoute");
const user = require("./routes/userRoutes");
const order = require("./routes/orderRoute");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

//Route Imports

app.use("/api/v1", products);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use(errorMiddleware);

module.exports = app;
