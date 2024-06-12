const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const TMDB_API_KEY = 'YOUR_TMDB_API_KEY';

app.get('/api/movies/popular', async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/api/movies/:id', async (req, res) => {
  try {
    const movieId = req.params.id;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&append_to_response=credits,reviews`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
