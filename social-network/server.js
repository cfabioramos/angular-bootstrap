const path = require('path');
const fs = require('fs');
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const BASE_IMAGES_DIR = 'src/assets/img';
let atualTimeDirectory = null;
let atualImagesDir = null;

function defineAtualFileDir(fileDir) {
	atualTimeDirectory = fileDir;
	atualImagesDir = BASE_IMAGES_DIR + '/' + atualTimeDirectory;
	
	if (!fs.existsSync(atualImagesDir)){
	    fs.mkdirSync(atualImagesDir);
	}
}

let imageName = null;
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
    	let dateNow = new Date();
    	let fileDir = dateNow.getMonth() + '-' + dateNow.getFullYear();
    	defineAtualFileDir(fileDir);
    	
    	cb(null, atualImagesDir);
    },
    filename: (req, file, cb) => {
    	imageName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
    	cb(null, imageName);
    }
});
let upload = multer({storage: storage});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(BASE_IMAGES_DIR));
 
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

//TODO Por enquanto não iremos utilizar
//app.get('/api', function (req, res) {
//  res.end('file catcher example');
//};
 
app.post('/api/upload', upload.single('photo'), function (req, res) {
    if (!req.file) {
//        console.log("No file received");
        return res.send({
          success: false
        });
    
      } else {
//        console.log('file received');
        return res.send({
          success: true,
          imageName: atualTimeDirectory + '/' + imageName
        })
      }
});
 
const PORT = process.env.PORT || 3000;
 
app.listen(PORT, function () {
  console.log('Node.js server is running on port ' + PORT);
});