const PORT = 6060;
const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors());

app.listen(PORT, () => console.log(`Server running on Port : ${PORT}`));

// app.get("/" , (req, res) => {
//     console.log(res);
//     console.log(req);
//     res.send("AS");
// })

const multer = require('multer');

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, 'public');
    },
    filename : (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
})

const upload = multer({storage : storage}).single('file');

app.post("/predict", (req, res) => {
    upload(req, res, (err) => {
        if (err){
            res.sendStatus(500);
        }
        //TODO: PREDICT

    });
    
});
