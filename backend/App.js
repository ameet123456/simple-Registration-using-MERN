import express from 'express';
import mongoose from 'mongoose';
import User from './Model/User.js';
import cors from 'cors';

const app = express();
const port = 5000;

mongoose.connect("mongodb://localhost:27017/e-com", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch(err => console.log(err));

app.use(cors({ origin: 'http://localhost:3000'}));  // Correct the usage
app.use(express.json());
app.use('/api/User', User);
app.use('/api/User', (req, res, next) => {
    console.log('Received request at /api/User');
    next();
});
app.use('/', (req, res) => {
    res.send("E-commerce website");
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
