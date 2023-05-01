const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef Recipe Hunter Server is ready...')
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chefs.find(c =>c._id === id);
    res.send(selectedChef);
})

app.listen(port, () => {
    console.log('Server is ready: ', port);
})