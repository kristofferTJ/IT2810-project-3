import express from 'express';
import { connectDB } from './config/db';

const app = express();

//Connect Database
connectDB();

// Init Middleware

app.use(express.json());

var cors = require('cors');

app.use(cors());

// Define Routes

app.use('/api/restaurant', require('./routes/api/restaurant'));
app.use('/api/counter', require('./routes/api/counter'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
