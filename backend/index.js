import express from 'express';
import dotenv from 'dotenv';
import api from './api/api.js';

const app = express();
dotenv.config();

app.use("/", api);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
