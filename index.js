const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

const planets = JSON.parse(fs.readFileSync("data/planets.json", "utf8"));

app.get("/", (req, res) => {
  res.send("Welcome. Please visit /planets");
});

app.get("/planets", (req, res) => {
  try {
    const { fields } = req.query;

    const requestedFields = fields ? fields.split(",") : [];

    const response = planets.map((planet) => {
      const planetData = { id: planet.id };

      if (requestedFields.length > 0) {
        requestedFields.forEach((field) => {
          if (planet.hasOwnProperty(field)) {
            planetData[field] = planet[field];
          }
        });
      } else {
        Object.assign(planetData, planet);
      }

      return planetData;
    });

    res.status(200).json(response);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ error: "Server error" });
  }
});

app.listen(port, () => {
  console.log(`Server runned: http://localhost:${port}`);
});
