const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Connect_DB } = require('./DB_Connection');

dotenv.config();
const app = express();
app.use(express.json());
Connect_DB();
app.use(cors())
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`)
})


