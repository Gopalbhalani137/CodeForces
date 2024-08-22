const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const clientId = 'Ov23liZ0Gy07QeODHBbY';
const clientSecret = 'f125a3fddf26d1bb80885bb766c21a90c667d374';
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get('/getAccessToken', async (req, res) => {
    const code = req.query.code;
    try {
        const response = await fetch(`https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        res.send(data);
    } catch (error) {
        console.error('Error fetching access token:', error);
        res.status(500).send('Error fetching access token');
    }
});
const mongoose = require('mongoose');
const dbUri = 'mongodb+srv://gopalbhalani137:px1UfyvV6dmdOZKJ@cluster0.paeww.mongodb.net/';

mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log('MongoDB connection error:', err));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
