import express  from "express";
import User from '../models/user.model.js' 

const userRouter = express.Router();

userRouter.route('/').get(async (req, res)=>{
        try {
             const users =  await User.find({});
             res.send({users});

        } catch(err){
            res.status(400).json({"Error": err});
        }
});

userRouter.route('/add').post( async (req, res)=>{
        const {username} = req.body;

        const alreadyExist = await User.findOne({username});
        if(alreadyExist) return res.json({"Error": "Usuário já existe"});
        
        try {
            const user = new User({username});
            await user.save();
            res.send("User Added!");
             
        } catch(err){
            es.status.json({"Error": err});
        }

});




export default userRouter;