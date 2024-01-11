const express = require ('express');
const cors = require ('cors');
const User = require('./models/User');
const app = express();
const mongoose = require('mongoose')

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://mduduzindlovu61:C0gH3601PsKRPEcn@cluster0.ur44j2b.mongodb.net/');

app.post('/register', async (req,res) => {
    const {username,password} = req.body;
    const userDoc = await User.create({username,password})
    res.json(userDoc);
    

})


app.listen(4000);

//mongodb+srv://mduduzindlovu61:C0gH3601PsKRPEcn@cluster0.ur44j2b.mongodb.net/
//C0gH3601PsKRPEcn