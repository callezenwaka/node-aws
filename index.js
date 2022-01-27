const express = require('express');
const cors = require('cors')
const app = express();
// import routes
const index = require("./routes/index");

// Automatically parse request through middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route middleware
app.use('/index', index);

// Ping home route
app.get('/', (req, res) => {
  try {
    res.status(200).json('Ok');
  } catch (error) {
    next(error)
  }
});

// Set up port and start the server
app.listen( process.env.PORT, () => {
  console.log(`Server listening on port: ${process.env.PORT}\nPress Ctrl+C to quit.`);
});

module.exports = app;