// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(10);
const secret = 'asdasdasdasd'


const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://mduduzindlovu61:C0gH3601PsKRPEcn@cluster0.ur44j2b.mongodb.net/blog-APPP', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const userDoc = await User.create({ username, password:bcrypt.hashSync(password,salt) });
    res.json(userDoc);
  } catch (error) {
    console.error('Error registering user:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/login',async (req,res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({username});

    const passOk = bcrypt.compareSync(password,userDoc.password);
    res.json(passOk);

    if (passOk) {
        jwt.sign({
            username,
            id:userDoc._id
        },secret,{},(error,token) => {
            if (error) {
                throw error
            };
            res.json(token)
        })
    } else {
        res.status(400).json('wrong Credentials') // 1:17:06
    }
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
