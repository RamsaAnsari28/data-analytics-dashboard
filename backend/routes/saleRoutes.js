const express = require("express");
const router = express.Router();
const Sale = require("../models/Sale");

// ✅ Insert Sample Data
router.get("/seed", async (req, res) => {
  try {
    await Sale.deleteMany(); // clear old data

    const sampleData = [
      { product: "Laptop", category: "Electronics", amount: 800, quantity: 2, date: new Date("2024-01-10"), status: "Completed" },
      { product: "Phone", category: "Electronics", amount: 500, quantity: 3, date: new Date("2024-01-15"), status: "Pending" },
      { product: "Shoes", category: "Fashion", amount: 120, quantity: 5, date: new Date("2024-02-05"), status: "Completed" },
      { product: "Watch", category: "Accessories", amount: 200, quantity: 4, date: new Date("2024-02-20"), status: "Cancelled" },
      { product: "Bag", category: "Fashion", amount: 150, quantity: 6, date: new Date("2024-03-12"), status: "Completed" },
      { product: "Tablet", category: "Electronics", amount: 600, quantity: 2, date: new Date("2024-03-18"), status: "Completed" }
    ];

    await Sale.insertMany(sampleData);

    res.json({ message: "Sample data inserted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Get All Sales
router.get("/", async (req, res) => {
  try {
    const sales = await Sale.find();
    res.json(sales);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;