import express from  'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import exerciseRouter from './routes/exercises.js'
import userRouter from './routes/users.js'
import './bd/conexionBD.js';

// SEVER'S SETTINGS 
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// ROUTES 
app.use('/user', userRouter);
app.use('/exercise', exerciseRouter);

app.listen(port, ()=> console.log(`Roudouuu!! ${port}` ));