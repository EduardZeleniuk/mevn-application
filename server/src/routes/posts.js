const express = require('express')
const router = express.Router()
const Post = require('../models/post-model')


router.post('/', (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  })
  post.save((err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send({
        success: true,
        message: `Post with ID_${data._id} saved successfully!`
      })
    }
  })
})


router.get('/', (req, res) => {
  Post.find({}, 'title description', (err, posts) => {
    if (err) {
      res.sendStatus(500)
    } else {
      res.send({ posts: posts })
    }
  }).sort({ _id: -1 })
})

module.exports = router