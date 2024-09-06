import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connect from './Config/db.js';
import dataRoutes from './routes/dataRoutes.js';

connect();

const app = express();
dotenv.config();
const port = process.env.PORT;

const reactUrl = process.env.REACT_URL;

const corsOptions = {
    origin: `${reactUrl}`, 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  };

app.use(cors(corsOptions));

app.use(express.json());

app.use('/apiData',dataRoutes());


app.get('/', function(req,res){
    
    res.send(" Home Page");
})

app.listen(port , function(){
    console.log(`server is listening at http://localhost:${port}`);
});
