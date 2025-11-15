// /server/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Connect to DB
connectDB();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

app.get('/', (req, res) => res.send('Quick_Bites backend running'));

// placeholder for auth routes (we'll add them next)
app.use('/api/auth', require('./routes/auth'));

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
