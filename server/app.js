import express from 'express'
import mongoose from 'mongoose';


export const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.DBURI);
        console.log('connected to Database')
    }catch(err){
        console.error(err)
    }
}

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello world')
});
export default app;