const express = require('express');
const {resolve} = require('path');

const app = express()

/*Statically serve js files, serve homepage by default */
app.use(express.static('js'));
app.get('/', (req, res) => res.sendFile(resolve(__dirname, 'index.html')));

app.listen(process.env.PORT || '1337');

