import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const uri = process.env.URI;

mongoose.connect(uri, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
      }
);

const connection = mongoose.connection;
connection.once('open', ()=> console.log("Bd Connected"));
