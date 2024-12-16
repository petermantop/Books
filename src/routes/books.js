const express = require("express");
const router = express.Router();
const { Book, books } = require("../models/book");
const bookSchema = require("../validators/bookValidator");

// List all books
router.get("/", (req, res) => {
  // Add code here
});

// Get specific book
router.get("/:id", (req, res) => {
  // Add code here
});

router.post("/", async (req, res) => {
  // Add code here
});

// Update book
router.put("/:id", async (req, res) => {
  // Add code here
});

// Delete book
router.delete("/:id", (req, res) => {
  // Add code here
});

module.exports = router;
