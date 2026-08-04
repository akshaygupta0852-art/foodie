import express from 'express';
import auth from '../middleware/authmiddleware.js';
import User from '../models/User.js';

const router = express.Router();

router.get('/profile', auth, async (req, res)=>{
    try{
        const userId = req.user.id;
        const user = await User.findById(userId);

        if(!user){
            return res.status(404).json({
                message : 'User not found!',
                type : 'Failed'
            })
        }
        const data = {
            userName : user.name,
            email : user.email,
        }

        return res.status(200).json({
            userData : data,
            type : 'Done'
        });

    }catch(Err){
        console.error(Err)
        return res.status(500).json({
            message : 'Internal server error!',
            type : 'Failed'
        })
    }
});

export default router;