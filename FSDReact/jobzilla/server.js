const express = require('express');
const path = require('path');
const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.sendFile(path.join(dir_name, 'views', 'index.html'));
});

app.listen(PORT, ()=> log('Server is starting on PORT, ', 8080));