const express = require("express");
const mongoose = require("mongoose");
const { Products } = require("./models");
var cors = require('cors')
const app = express();
const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};
app.use(cors(corsOpts))
app.use(express.json());
app.get("/", async (req, res) => {
  res.send('ok')
});
const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://AsNghia:AsNghia123@asupgrade.hgt7urs.mongodb.net/?retryWrites=true&w=majority", () => {
        console.log('ok');
      }
    );
    app.listen(3001, () => console.log("Server started on port 3001"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();