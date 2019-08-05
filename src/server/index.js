const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'src/client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getImages', (req,res) => {
    var images =  [
        { imageURL:"https://source.unsplash.com/7GsMpDZwhfc/1600x900", description: 'Sandwich'},
        { imageURL:"https://source.unsplash.com/tClS6SPq8Zo/1600x900", description: 'Dry Valley'},
        { imageURL:"https://source.unsplash.com/WgGJjGN4_ck/1600x900", description: 'Green'},
        { imageURL:"https://source.unsplash.com/IL526pUqQ1k/1600x900", description: 'Natures Beauty'},
        { imageURL:"https://source.unsplash.com/4F58bW9NriA/1600x900", description: 'Climb High'},
        { imageURL:"https://source.unsplash.com/ecGr53yZvE8/1600x900", description: 'Sand Trees'}
      ];
    res.json(images);
    console.log('Sent list of images');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'src/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);