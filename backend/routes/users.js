import express  from "express";
import User from '../models/user.model.js' 

const userRouter = express.Router();

userRouter.route('/users').get(async (req, res)=>{
    const users =  await User.find({});    
    try {
            
             res.send({users});

        } catch(err){
            res.status(400).json({"Error": err});
        }
});

userRouter.route('/add').post( async (req, res)=>{
        const {username} = req.body;

        
        try {
            const alreadyExist = await User.findOne({username});
            if(alreadyExist) return res.send({"Error": "Usuário já existe"});
        
            const user = new User({username});
            await user.save();
            res.send("User Added!");
             
        } catch(err){
               res.send({"Error": err});
        }

});




export default userRouter;