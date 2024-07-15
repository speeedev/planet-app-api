const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

const planets = JSON.parse(fs.readFileSync('planets.json', 'utf8'));

app.get('/planets', (req, res) => {
  const { id, name, imageUrl, orderOfProximityToSun, shortDescription, longDescription, primaryColor, videoUrl } = req.query;



  const response = {};
  if (id !== undefined) response.id
  if (name !== undefined) response.name
  if (imageUrl !== undefined) response.imageUrl
  if (orderOfProximityToSun !== undefined)
  if (shortDescription !== undefined)
  if (longDescription !== undefined)
  if (primaryColor !== undefined)
  if (videoUrl !== undefined)

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server started: http://localhost:${port}`);
});
