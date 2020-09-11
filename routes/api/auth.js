const express = require('express');
const router = express.Router();
const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator');

router
    //LOGIN
    //@route        POST api/auth
    //@description  Authenticate user and get token
    //@access       Public
    .post('/',
        [
            check('email', 'Valid Email Required').not().isEmpty(),
            check('password', 'Password Required').exists()
        ],
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const { email, password } = req.body;
            try {
                let user = await User.findOne({ email });
                if (!user) {
                    // console.log('Invalid Credentials');
                    return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
                }
                if (!await bcrypt.compare(password, user.password)) {
                    console.log('Invalid Credentials');
                    return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
                }
                const payload = {
                    user: {
                        id: user.id
                    }
                }
                jwt.sign(payload, config.get('jwtSecret'), /* { expiresIn: 36000 }, */(err, token) => {
                    if (err) {
                        console.log("Error in generating token");
                        throw err;
                    }
                    res.json({ token })
                })
            } catch (err) {
                console.log(err.message);
                res.status(500).json('Server Error');
            }
        })
module.exports = router