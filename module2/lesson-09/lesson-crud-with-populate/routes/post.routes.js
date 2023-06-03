const router = require("express").Router();

const User = require("../models/User.model");
const Post = require("../models/Post.model");

// ****************************************************************************************
// GET route to display the form to create a new post
// ****************************************************************************************

// localhost:3000/post-create
router.get("/post-create", (req, res) => {
  User.find()
    .then((dbUsers) => {
      res.render("posts/create", { dbUsers });
    })
    .catch((err) => console.log(`Err while displaying post input page: ${err}`));
});

// ****************************************************************************************
// POST route to submit the form to create a post
// ****************************************************************************************

// <form action="/post-create" method="POST">

router.post('/post-create', (req, res) => {
  const {title, content, author} = req.body;
  console.log('req.body',req.body)

  Post.create({ title, content, author})
      .then(dbPost => {
        return User.findByIdAndUpdate(author, { $push: { posts: dbPost._id } });
      })
      .then(updatedUser => {
        console.log('updatedUser', updatedUser)
        res.redirect('/posts');
      })
      .catch(err => console.log(err))
})

// ****************************************************************************************
// GET route to display all the posts
// ****************************************************************************************

// ... your code here

router.get('/posts', (req, res) => {
  Post.find()
     .populate('author')
    .then(allThePosts => {
      console.log('allThePosts', allThePosts)
      res.render('posts/list', {allThePosts})
    })
})

// ****************************************************************************************
// GET route for displaying the post details page
// shows how to deep populate (populate the populated field)
// ****************************************************************************************

router.get('/posts/:postId', (req, res, next) => {
  const { postId } = req.params;
 
  Post.findById(postId)
    .populate('author comments')
    .populate({
      // we are populating author in the previously populated comments
      path: 'comments',
      populate: {
        path: 'author',
        model: 'User'
      }
    })
    .then(foundPost => {
      console.log('foundPost', foundPost)
      res.render('posts/details', foundPost)})
    .catch(err => {
      console.log(`Err while getting a single post from the  DB: ${err}`);
      next(err);
    });
});

module.exports = router;
