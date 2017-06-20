import mongoose from 'mongoose'
const Schema = mongoose.Schema

const user = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['customer', 'admin'],
      required: true
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    loginAttempts: {
      type: Number,
      required: true,
      default: 0
    },
    lockUntil: {
      type: Date
    }
  },
  {
    timestamps: true
  }
)

// export schema
module.exports = mongoose.model('user', user)
