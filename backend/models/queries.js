import express from 'express';
import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();
const { Pool } = pg;

const app = express();

app.use(express.json());

const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
    allowExitOnIdle: true,
});

try {
    await pool.query('SELECT NOW()');
    console.log('Database connection successful');
} catch (error) {
    console.error('Database connection error:', error);
}

const getPosts = async () => {
  const { rows } = await pool.query('SELECT * FROM posts');

  return rows;
};

const addPost = async (post) => {
  const { titulo, img, descripcion } = post

  const query = 'INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4) RETURNING *';
  const values = [titulo, img, descripcion, 0];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  }

};

export { getPosts, addPost };