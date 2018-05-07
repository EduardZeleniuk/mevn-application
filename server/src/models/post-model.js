const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PostSchema = new Schema({
  title: {
    type: String,
    default: 'asd'
  },
  description: {
    type: String,
    default: 'asd'
  }
})
const PostModel = mongoose.model('posts', PostSchema)
module.exports = PostModel