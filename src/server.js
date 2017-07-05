const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Post = require('./models/posts');

const app = express();
const router = express.Router();
const port = 3001;

mongoose.connect('mongodb://radiant:password@ds141232.mlab.com:41232/radiant-earth');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

router.route('/posts')
  .get(function(req, res) {
    Post.find(function(err, posts) {
      if (err) {
        res.send(err);
      }
      res.json(posts)
    });
  })
  .post(function(req, res) {
    let post = new Post();

    post.title = req.body.title;
    post.summary = req.body.summary;
    post.category = req.body.category;
    post.picture = req.body.picture;
    post.source = req.body.source;

    post.save(function(err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Post successfully added!' });
    });
  });

app.use('/api', router);

app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
