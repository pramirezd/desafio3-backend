import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getPosts, addPost } from '../models/queries.js'

const api = express();
dotenv.config();

api.use(cors());
api.use(express.json());

api.get('/posts', async (req, res) => {
    try {
      const result = await getPosts();
      return res.status(200).json({ result });
    } catch (error) {
      return res.status(400).json({ error });
    }
});
  

api.post('/posts', async (req, res) => {
    const post = {
      titulo: req.body.titulo,
      img: req.body.url,
      descripcion: req.body.descripcion
    };
  
    try {
      const result = await addPost(post);
      return res.status(201).json({ result });
    } catch (error) {
      return res.status(400).json({ error });
    }
});

export default api;