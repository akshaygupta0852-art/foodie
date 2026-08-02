import express from "express";
import User from "../models/User.js";
import auth from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/add", auth, async (req, res) => {
  try {
    const {
      username,
      mobile,
      label,
      houseNo,
      street,
      city,
      pincode,
      isDefault,
    } = req.body;

    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!username || !mobile || !houseNo || !street || !city || !pincode) {
      return res.status(300).json({
        message: "All field are required",
      });
    }

    if (!user) {
      return res.status(404).json({
        message: "User not found!",
      });
    }
    user.addresses.push({
      username,
      mobile,
      label,
      houseNo,
      street,
      city,
      pincode,
      isDefault,
    });

    await user.save()
    return res.status(200).json({
        message : 'Address is successfully saved',
        address : user.addresses
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Invalid data",
        errors: Object.values(error.errors).map((err) => err.message),
      });
    }
    console.error(error);
    return res.status(500).json({
      message: "Internal server error!",
    });
  }
});

router.get('/view', auth, async (req, res)=>{
    try{
        const userId = req.user.id;
        const user = await User.findById(userId);

        if(!user){
            return res.status(404).json({
                message : "User not found!"
            })
        }

        return res.status(200).json({
            message : 'All address sent',
            address : user.addresses
        });
    }catch(error){
        console.error(error);
        return res.status(500).json({
            message : 'Internal server error!'
        });
    }
})

router.delete('/delete', auth, async (req, res)=>{
  try{
    const { addressId } = req.body;
    const userId = req.user.id;
    const user = await User.findById(userId);

    if(!user){
      return res.status(404).json({
        message : 'User not found!'
      })
    }

    user.addresses = user.addresses.filter((add)=> !add._id.equals(addressId))
    await user.save();

    return res.status(200).json({
      message : 'Address is deleted successfully!',
      addresses : user.addresses
    });

  }catch(err){
    console.error(err)
    return res.status(500).json({
      message : "Internal server error!"
    })
  }
})

export default router;