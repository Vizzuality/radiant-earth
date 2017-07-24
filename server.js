require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Post = require('./models/posts');
const User = require('./models/users');
const Category = require('./models/category');

const app = express();
const router = express.Router();
const port = process.env.LOCAL_API_PORT;

mongoose.connect(process.env.MONGODB_URL, {useMongoClient: true});

app.use(express.static(path.join(__dirname, 'client/build')));
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

app
  .get('/api/posts', function(req, res) {
    if (req.query.post_id) {
      Post.find({_id: req.query.post_id},function(err, posts) {
        if (err) {
          res.send(err);
        }
        res.json(posts)
      });
    } else {
      Post.find(function(err, posts) {
        if (err) {
          res.send(err);
        }

        console.log(posts);
        res.json(posts)
      });
    }
  })
  .post('/api/posts', function(req, res) {
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
  .delete('/api/posts', function(req, res) {
    Post.remove({_id: req.query.post_id}, function (err, todo) {
      if (err) {
        res.send(err);
      } else {
        res.send(true);
      }
    });
  })
  .put('/api/posts', function(req, res) {
    Post.findById(req.body.post_id, function(err, posts) {
      if (err) {
        res.send(err);
      } else {
        posts.title = req.body.title;
        posts.summary = req.body.summary;
        posts.category = req.body.category;
        posts.picture = req.body.picture;
        posts.source = req.body.source;
        posts.link = req.body.link;

        posts.save(function(err, todo) {
          if (err) {
            res.status(500).send(err)
          }
          res.send(todo);
        });
      }
    });
  })

  .get('/api/users', function(req, res) {
    User.find(function(err, users) {
      if (err) {
        res.send(err);
      }
      res.json(users)
    });
  })
  .post('/api/users', function(req, res) {
    let user = new User();

    user.title = req.body.name;
    user.summary = req.body.password;

    user.save(function(err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'User successfully added!' });
    });
  })

  .get('/api/category', function(req, res) {
    if (req.query.category_id) {
      Category.find({_id: req.query.category_id},function(err, category) {
        if (err) {
          res.send(err);
        }
        res.json(category)
      });
    } else {
      Category.find(function(err, category) {
        if (err) {
          res.send(err);
        }
        res.json(category)
      });
    }
  })
  .post('/api/category', function(req, res) {
    let category = new Category();

    category.name = req.body.name;

    category.save(function(err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Category successfully added!' });
    });
  })
  .delete('/api/category', function(req, res) {
    Category.remove({_id: req.query.category_id}, function (err, todo) {
      if (err) {
        res.send(err);
      } else {
        res.send(true);
      }
    });
  })
  .put('/api/category', function(req, res) {
    Category.findById(req.body.category_id, function(err, categories) {
      if (err) {
        res.send(err);
      } else {
        categories.name = req.body.name;

        categories.save(function(err, todo) {
          if (err) {
            res.status(500).send(err)
          }
          res.send(todo);
        });
      }
    });
  });

app.get('*', (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
