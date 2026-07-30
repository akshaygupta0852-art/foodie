import express from 'express';
import auth from '../middleware/authmiddleware.js';
const router = express.Router();

router.get('/me', auth, async (req,res)=>{
    try{
        return res.status(200).json({
            message : "authenticated user appear"
        })
    }catch(err){
        console.error(err)
        return res.status(500).json({
            message : 'internal server error'
        })
    }
});
export default router;