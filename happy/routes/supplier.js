const express = require('express');
const Posts = require('../models/SupplierModel');
const bodyParser = require('body-parser');
const router = express.Router();
// const Completed = require('../models/supplierCompleted');

//save posts
router.post('/supplier/save', (req,res) => {
    let newPost = new Posts(req.body);
    newPost.save()
        .then(savedPost => {
            return res.status(200).json({
                success: "Posts saved successfully",
                post: savedPost
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err.message
            });
        });
});

//get posts 
router.get('/getsuppliers', (req, res) => {
    Posts.find()
        .then(posts => {
            return res.status(200).json({
                success:true,
                existingPosts: posts
            });
        })
        .catch(err => {
            return res.status(400).json({
                error:err
            });
        });
});

//update posts
router.put('/supplier/update/:id', async (req, res) => {
    try {
        const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json({ success: "Updated Successfully" });
    } catch (err) {
        return res.status(400).json({ error: err });
    }
});

//delete posts
router.delete('/supplier/delete/:id', async (req, res) => {
    try {
        const deletedPost = await Posts.findOneAndDelete({ _id: req.params.id });
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        return res.json({ message: 'Delete Successful', deletedPost });
    } catch (err) {
        return res.status(400).json({ message: 'Delete unsuccessful', error: err });
    }
});

//get a specific post
router.get('/supplier/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Posts.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        return res.status(200).json({
            success: true,
            post
        });
    } catch (err) {
        return res.status(400).json({ success: false, error: err.message });
    }
});
// router.get('/supplier/markAsComplete/:id', async (req, res) => {
//     try {
//         const postId = req.params.id;
//         const post = await Posts.findById(postId);
//         if (!post) {
//             return res.status(404).json({ message: 'Post not found' });
//         }
//         return res.status(200).json({
//             success: true,
//             post: {
//                 title: post.title,
//                 content: post.content // add the post content here
//             }
//         });
//     } catch (err) {
//         return res.status(400).json({ success: false, error: err.message });
//     }
// });


//mark post as complete
// router.put('/supplier/markAsComplete/:id', async (req, res) => {
//     try {
//       const post = await Posts.findById(req.params.id);
//       const {supplierID, customerName, phoneNum, device, Brand, Model, reason, givenDate, customerAddress, supplierPrize} = post;
//       const completedPost = new Completed({supplierID, customerName, phoneNum, device, Brand, Model, reason, givenDate, customerAddress, supplierPrize});
//       await completedPost.save();
//       await Posts.findByIdAndDelete(req.params.id);
//       res.json({ success: true });
//     } catch (error) {
//       console.log(error);
//       res.json({ success: false, message: error.message });
//     }
//   });

  // get completed posts
// router.get('/supplierCompleted', async (req, res) => {
//     try {
//       const completedPosts = await Completed.find();
//       return res.status(200).json({
//         success: true,
//         completedPosts
//       });
//     } catch (err) {
//       return res.status(400).json({
//         success: false,
//         error: err.message
//       });
//     }
//   });

  //delete completed post
// router.delete('/supplierCompleted/delete/:id', async (req, res) => {
//     try {
//       const deletedPost = await Completed.findOneAndDelete({ _id: req.params.id });
//       if (!deletedPost) {
//         return res.status(404).json({ message: 'Post not found' });
//       }
//       return res.json({ message: 'Delete Successful', deletedPost });
//     } catch (err) {
//       return res.status(400).json({ message: 'Delete unsuccessful', error: err });
//     }
//   });  

module.exports = router;
