const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = Schema(
  {
    firstName: String,
    name: String,
    email: String
  },
  { timestamps: true }
);

if (!userSchema.options.toObject) userSchema.options.toObject = {};
userSchema.options.toObject.transform = function (doc, ret, options) {
  delete ret.__v;
  return ret;
}

module.exports = mongoose.model("User", userSchema);
