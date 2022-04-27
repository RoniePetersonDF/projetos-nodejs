const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('API de carros');
});

app.listen(8000, () => console.log(`Server is running in http://localhost:8000`));