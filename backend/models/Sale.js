const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ["Completed", "Pending", "Cancelled"],
    default: "Completed"
  }
}, { timestamps: true });

module.exports = mongoose.model("Sale", saleSchema);