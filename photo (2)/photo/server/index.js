const express = require('express');
const multer = require('multer');
const net = require('net');
const cors = require('cors');
const app = express();
const port = 3001;
const path = require('path');
const fs = require('fs');

app.use(cors());
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send('Hello, this is the root route.');
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadFolder = 'uploads/';
  
      if (!fs.existsSync(uploadFolder)) {
        fs.mkdirSync(uploadFolder);
      }
  
      cb(null, uploadFolder);
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  
const upload = multer({ storage: storage });
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'Dosya alınamadı!' });
  }

  if (!req.file) {
    return res.status(400).json({ message: 'Dosya alınamadı!' });
  }

  const fileSize = req.file.size;


  return res.status(200).json({ message: 'Dosya başarıyla gönderildi.' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
