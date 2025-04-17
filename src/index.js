import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js';
dotenv.config();
const app=express();
const PORT=process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
    const result=await pool.query('SELECT current_database()');
    res.send(`Database: ${result.rows[0].current_database}`);
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});   