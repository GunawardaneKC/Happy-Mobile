const express = require('express');

const Postdelivery = require('../models/category')
 

const router = express.Router();

//save posts

router.post('/category/save',(req,res)=>{
    let newPost = new Postdelivery(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Post save successfully"
        });
    });
});


//get posts

router.get('/getcategories',(req,res)=>{
    Postdelivery.find().exec((err,postsDelivery)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
            return res.status(200).json({
                success:true,
                existingPosts:postsDelivery
            });
        
    });
});

//update Posts

router.put('/category/update/:id',(req,res)=>{
    Postdelivery.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
                return res.status(200).json({
                    success:"Updated Succesfully"
                    
                });
            }
        
    );
});


//delete post
router.delete('/category/delete/:id',(req,res)=>{
    Postdelivery.findByIdAndRemove(req.params.id).exec((err,deletedDelivery)=>{
        if(err)
            return res.status(400).json({
                massage:"Delete unsuccesful",err
            });
            return res.json({
                massege:"Delete Succesfully",deletedDelivery
                
            });
        

    });
});

module.exports = router;