import express from 'express';
import Restaurants from '../models/Restaurant.js';

const router = express.Router();

router.get('/restaurants', async (req, res)=>{
    try{
        const data = await Restaurants.find({
            isActive : true,
            isOpen : true
        });
        return res.status(200).json({
            restaurants : data
        });
    }catch(err){
        console.error(err);
        return res.status(500).json({
            message : 'Internal server error',
            type: "Failed",
        })
    }
});
export default router;