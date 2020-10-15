import express from 'express';
import { connectDB } from './config/db';
// const connect = require('./config/db');

const app = express();

//Connect Database
connectDB();

// Init Middleware

app.use(express.json());

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/user', require('./routes/api/user'));
app.use('/api/restaurant', require('./routes/api/restaurant'));
app.use('/api/rating', require('./routes/api/rating'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
