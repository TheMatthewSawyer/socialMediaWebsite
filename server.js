const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


if (process.env.NODE_ENV === "production") {

    app.use(express.static(path.join(__dirname, '/client/build')));
    app.get('/', function (req, res) {
        const path = require('path');
        res.sendFile(path.join(__dirname, 'client/build/index.html'));
    });
}

const PORT = process.env.PORT || 3001;
console.log('Listening on ' + PORT);
app.listen(PORT);