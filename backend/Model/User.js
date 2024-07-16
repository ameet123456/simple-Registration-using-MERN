import express from 'express';
import bcrypt from 'bcrypt';
import User from '../Routes/users.js'; // Correct import path
import JWT from "jsonwebtoken";
const router = express.Router();


const jwtSecret = 'my_jwt_secret';

router.post('/Signin', async (req, res) => {
    console.log('Received POST request at /api/User/Signin with body:', req.body);
    const { name, email, mob, address, password } = req.body;
    if (!name || !email || !mob || !password) {
        return res.status(400).send({ success: false, msg: 'All fields are required' });
    }

    try {
        let user = await User.findOne({ email });

        if (user) {
            console.log('User already exists:', user);
            return res.status(400).send({ success: false, msg: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        user = new User({ name, email, mob, password: hashedPassword });
        await user.save();
        console.log('Account created successfully:', user);
        res.status(201).send({ success: true, msg: "Account created successfully" });

    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Login endpoint
router.post('/login', async (req, res) => {
    console.log('Received POST request at /api/User/login with body:', req.body);
    const { email, mob, password } = req.body;
    if (!email && !mob) {
        return res.status(400).send({ success: false, msg: 'Email or mobile number is required' });
    }
    if (!password) {
        return res.status(400).send({ success: false, msg: 'Password is required' });
    }

    try {
        let user = null;

        if (email) {
            user = await User.findOne({ email });
        } else if (mob) {
            user = await User.findOne({ mob });
        }

        if (!user) {
            console.log('User not found:', email || mob);
            return res.status(400).send({ success: false, msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send({ success: false, msg: "Invalid credentials" });
        }

        const token = await JWT.sign({ _id:user.id},jwtSecret,{
            expiresIn:"10d",
        });

        console.log("User login successfully");
        return res.status(200).send({
            success: true,
            msg: "Login successful",
            user: {
                id: user._id,
                email: user.email,
                name: user.name
            },
            token,
        });

    } catch (error) {
        res.status(500).send(error.message);
    }
});

export default router;
