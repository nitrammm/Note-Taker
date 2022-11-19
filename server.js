const express = require('express');
const apiRoute = require('./routes/api');
const htmlRoute = require('./routes/html');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true}));


app.use(express.static('public'));
app.use(express.json());

app.use('/api', apiRoute);
app.use('/', htmlRoute);




app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
});

