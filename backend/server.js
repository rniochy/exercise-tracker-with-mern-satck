import express from  'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Roudouuu!! ${port}` ));