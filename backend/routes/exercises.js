import express from "express";
import Exercise from "../models/exercise.model.js";

const exerciseRouter = express.Router();

exerciseRouter.route('/').get(async(req, res)=>{
  
      try {
            const exercises = await Exercise.find({});
            res.send({exercises});
        } catch(err){
            res.status(400).send({"Error": err});
      }
});

exerciseRouter.route('/add').post(async(req, res)=>{
        const {username, description, duration, date} = req.body;

        try {
                const exercise =  new Exercise({username, description, duration, date});
                await exercise.save();

                res.send("Exercicio adicionado com sucesso!!");
                
            } catch(err){
                res.status(400).send({"Error": err});
        }
});

exerciseRouter.route('/:id').get(async(req, res)=>{
            const id = req.params.id;

        try {
                const exercises = await Exercise.findById(id);
                res.send({exercises});
            } catch(err){
                res.status(400).send({"Error": err});
        }
        
});

exerciseRouter.route('/:id').delete(async(req, res)=>{
        const id = req.params.id;

        try {
         const exercise = await Exercise.findByIdAndDelete(id);
         exercise ?  res.send({msg:"Exercicio eleiminado!"}) :  res.send({msg:"Não eliminado!"})
        

        } catch(err){
        res.status(400).send({"Error": err});
        }

});

exerciseRouter.route('/update/:id').post(async(req, res)=>{
    const id = req.params.id;
    const {username, description, duration, date} = req.body;
    
    try {
    
     const exercises = await Exercise.findById(id);
    
     exercises.username =username;
     exercises.description = description;
     exercises.duration = duration
     exercises.date = date;
    
     await exercises.save();
     res.send("Exercicio atualizado com sucesso!!");
     
    } catch(err){
    res.status(400).send({"Error": err});
    }

});

export default exerciseRouter;

 