const mongoose = require("mongoose");
const { Schema } = mongoose;

const User = require("./user");

const teamSchema = Schema(
  {
    name: String,
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        validate: {
          validator: function(userId) {
            return User.findById(userId);
          },
          message: "not a valid user"
        }
      }
    ]
  },
  { timestamps: true }
);

if (!teamSchema.options.toObject) teamSchema.options.toObject = {};
teamSchema.options.toObject.transform = function (doc, ret, options) {
  delete ret.__v;
  // ret.users = doc.users.map(user => `${user.firstName} ${user.name}`);
  return ret;
}
module.exports = mongoose.model("Team", teamSchema);
