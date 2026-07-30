import express from 'express';

const router = express.Router();

router.get('/restaurants', async (req, res)=>{
    try{

    }catch(err){
        console.error(err);
        return res.status(500).json({
            message : 'Internal server error'
        })
    }
})