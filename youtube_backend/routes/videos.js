const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', async (req, res) => {
  const { title, description, videoLink, thumbnail, userId } = req.body;

  if (!title || !videoLink) {
    return res.status(400).json({ error: 'Title and video are required' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO videos (title, description, video_url, thumbnail_url, user_id)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [title, description, videoLink, thumbnail, userId]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM videos ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
