const express = require('express')
const app = express()
const fs = require('fs');

const port = 3000;

const imageFolder = './public/images/';
const images = [];

fs.readdir(imageFolder, (err, files) => {
  files.forEach(file => {
    images.push({
        name: file,
        url: './images/' + file
    });
  });
});

  if(images[0] === '.DS_Store'){
    images.splice(0,1);
  }
app.use(express.static('public'))

app.set('view engine', 'ejs');
// index
app.get('/', function(req, res){
    res.render('pages/index', {
       images: images
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))