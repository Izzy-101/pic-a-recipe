const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT;
const USER_ID = process.env.USER_ID;
const APP_ID = process.env.APP_ID;
const KEY = process.env.KEY;

app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {
    res.send('success');
});

app.post('/clarifai', async (req, res) => {
  const { imageUrl } = req.body;
  const raw = JSON.stringify({
    "user_app_id": {
      "user_id": USER_ID,
      "app_id": APP_ID
    },
    "inputs": [
      {
        "data": {
          "image": {
            "url": imageUrl
          }
        }
      }
    ]
  });

  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Key ' + KEY,
      'Content-Type': 'application/json'
    },
    body: raw
  };

  try {
    const response = await fetch('https://api.clarifai.com/v2/models/food-item-recognition/outputs', requestOptions);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Clarifai API error:', error);
    res.status(500).json({ error: 'Clarifai API call failed' });
  }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});