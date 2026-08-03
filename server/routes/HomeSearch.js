import express from 'express';
import mongoose from 'mongoose';
import food from '../models/Food.js';
import Restaurants from '../models/Restaurant.js';

const router = express.Router();

router.get('/find', async (req, res)=>{
    try{
        const query = req.query.q;

        const foods = await food.find({
            name : {
                $regex : query,
                $options : 'i'
            }
        }).limit(5);

        return res.json({
            food : foods
        });
    }catch(err){
        return res.status(500).json({
            message : 'Internal server error!',
            type : 'Failed'
        })
    }
});

router.get('/restaurant/find', async (req, res)=>{
    try{
        const query = req.query.q;
        const restaurants = await Restaurants.find({
            name : {
                $regex : query,
                $options : 'i'
            }
        }).limit(5);

        return res.json({
            restaurants : restaurants
        })
    }catch(err){
        return res.status(500).json({
            message : 'Internal server error!',
            type : 'Failed'
        })
    }
})
export default router;