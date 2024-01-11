// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');

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
    const userDoc = await User.create({ username, password });
    res.json(userDoc);
  } catch (error) {
    console.error('Error registering user:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
