const express = require('express');
const dotenv = require('dotenv').config();
const axios = require('axios');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send("YT-Video-Player backend.")
})

app.get('/api/search', async (req, res) => {

  const searchTerm = req.query.q;

  if (!searchTerm || searchTerm === "") {
    return res.status(400).send({ error: 'invalid search term' })
  }

  const apiRes = await axios.get(`${process.env.YOUTUBE_URL}/search?q=${searchTerm}&key=${process.env.YOUTUBE_API_KEY}&type=video&part=snippet`)
  const {data} = apiRes;

  return res.status(200).json(data);

})

app.listen(PORT, console.log('Server started on port ' + PORT));