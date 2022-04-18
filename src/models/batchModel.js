const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema(
  {
    name: String,
    size: Number,
    program: {
      type: String,
      enum: ["Frontend", "Backend"]
    }

  },
  { timestamps: true }
);

module.exports = mongoose.model("Batch", batchSchema);





