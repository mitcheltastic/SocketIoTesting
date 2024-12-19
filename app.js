const express = require("express");
const path = require("path");

const app = express();

// Middleware to serve static files (including `index.html`)
app.use(express.static(path.join(__dirname, "public")));

// Handle `favicon.ico` requests to prevent 404 errors
app.get("/favicon.ico", (req, res) => {
  res.status(204).end(); // "No Content" response
});

// Fallback route for any unhandled requests
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Export the app
module.exports = app;
