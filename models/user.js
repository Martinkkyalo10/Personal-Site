import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  firstName: {
    /* The name of this pet */

    type: String,
    required: [true, "First name is required."],
    maxlength: [20, "Name cannot be more than 60 characters"],
  },
  lastName: {
    /* The name of this pet */

    type: String,
    required: [true, "Last name is required"],
    maxlength: [20, "Name cannot be more than 60 characters"],
  },
  skills: {
    type: Array,
  },
  address: {
    type: String,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
  },
  bio: {
    type: String,
  },
  avator: {
    type: String,
  },
  contact: {
    type: Array,
  },
  projects: {
    type: Array,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
