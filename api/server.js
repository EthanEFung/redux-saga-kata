const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (res) => {
  res.send(200);
});
app.get('/games/:date', async (req, res) => {
  try {
    const {date} = req.params;
    const response = await axios.get(`http://data.nba.net/10s/prod/v1/${date}/scoreboard.json`);
    res.send(response.data);
  } catch (e) {
    res.sendStatus(500);
    console.error(e);
  }
})
app.listen(3001, err => {
  if (err) {
    throw err;
  } 
  console.log('listening on port 3001');
});

