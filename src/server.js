require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Post = require('./models/posts');
const User = require('./models/users');
const Category = require('./models/category');

const app = express();
const router = express.Router();
const port = process.env.LOCAL_API_PORT;

mongoose.connect(process.env.MONGODB_URL);

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
    post.link = req.body.link;

    post.save(function(err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Post successfully added!' });
    });
  })
  .delete(function(req, res) {
    Post.remove({_id: req.query.post_id}, function (err, todo) {
      if (err) {
        res.send(err);
      } else {
        res.send(true);
      }
    });
  });

  router.route('/users')
    .get(function(req, res) {
      User.find(function(err, users) {
        if (err) {
          res.send(err);
        }
        res.json(users)
      });
    })
    .post(function(req, res) {
      let user = new User();

      user.title = req.body.name;
      user.summary = req.body.password;

      user.save(function(err) {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'User successfully added!' });
      });
    });

    router.route('/category')
      .get(function(req, res) {
        Category.find(function(err, category) {
          if (err) {
            res.send(err);
          }
          res.json(category)
        });
      })
      .post(function(req, res) {
        let category = new Category();

        category.name = req.body.name;

        category.save(function(err) {
          if (err) {
            res.send(err);
          }
          res.json({ message: 'Category successfully added!' });
        });
      })
      .delete(function(req, res) {
        Category.remove({_id: req.query.category_id}, function (err, todo) {
          if (err) {
            res.send(err);
          } else {
            res.send(true);
          }
        });
      });



app.use('/api', router);

app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
