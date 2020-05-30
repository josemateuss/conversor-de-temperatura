const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/mainRoutes')
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(route);

app.listen(port, () => console.log('Listening port 3000'));