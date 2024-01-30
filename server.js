const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to set headers
app.use((req, res, next) => {
  res.header("Cross-Origin-Embedder-Policy", "require-corp");
  res.header("Cross-Origin-Opener-Policy", "same-origin");
  res.header("Cross-Origin-Resource-Policy", "cross-origin");
  res.header("SharedArrayBuffer", "true");
  next();
});

app.use(
  "/world-gen",
  express.static(path.join(__dirname, "public", "games", "world-gen"))
);

app.get("/", async (req, res) => {
  return res.json({ message: "Welcome to game server!", games: ["world-gen"] });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
