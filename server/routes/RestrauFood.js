import express from 'express';
import food from '../models/Food.js';

const router = express.Router();

router.get('/restaurants/:id/foods', async (req, res)=>{
    try{
        const foods = await food.find({restaurant : req.params.id});
        return res.status(200).json({
            foods
        })
    }catch(err){
        console.error(err);
        return res.status(500).json({
            message : "Internal Server Error"
        })
    }
});
export default router;