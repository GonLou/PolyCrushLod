const express = require('express')
const app = express()
const path = require('path');
const fileUpload = require('express-fileupload');
app.use(fileUpload());


app.use('/public', express.static(path.join(__dirname, 'public')))


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/test.html'));
});



// default options

app.post('/upload', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  const conversion = req.body.conversion
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;
  console.log(' file info ', sampleFile);

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('public/uploads/'+ sampleFile.name, function(err) {
    if (err)
      return res.status(500).send(err);

    // res.send('File uploaded!');
    res.redirect('/?filename='+sampleFile.name+'&conversion='+conversion);
  });
});



app.listen(3000, () => console.log('Example app listening on port 3000!'))
