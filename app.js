const express = require("express");
const path = require("path");

const app = express();

// Serve `index.html` and other static files from the root directory
app.use(express.static(path.join(__dirname)));

// Handle `favicon.ico` requests to prevent 404 errors
app.get("/favicon.ico", (req, res) => {
  res.status(204).end(); // No Content
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Frontend running at http://localhost:${PORT}`);
});
