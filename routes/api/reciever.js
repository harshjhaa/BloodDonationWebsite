const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth')
const Reciever = require('../../models/Reciever')


router
    //@route        GET api/donor/me
    //@description  Get current donor profile
    //@access       Private
    .get('/me', auth, async (req, res) => {
        try {
            const reciever = await Reciever.findOne({ user: req.user.id }).populate('user', ['name', 'email', 'contact', 'location']);
            if (!reciever) {
                return res.status(400).json({ mssg: 'Profile not found' });
            }
            res.json(reciever);
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Server Error");
        }
    })
    //@route        GET api/donor/all
    //@description  Get all profile
    //@access       Private
    .get('/me', auth, async (req, res) => {
        try {
            const donor = await Donor.find().populate('user', ['name', 'email', 'contact', 'location']);
            if (!donor) {
                return res.status(400).json({ mssg: 'No donor found' });
            }
            res.json(donor);
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Server Error");
        }
    })
    //@route        POST api/donor
    //@description  Create or update the donor profile
    //@access       Private
    .post('/',
        [
            auth,
            check('organizaionName', 'Organization Name is required').not().isEmpty(),
        ],
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const {
                organizaionName
            } = req.body;

            const recieverData = {};
            recieverData.user = req.user.id;
            recieverData.organizaionName = organizaionName;

            try {
                let reciever = await Reciever.findOne({ user: req.user.id });
                //if profile already exist then update it
                if (reciever) {
                    // return res.status(400).json({ mssg: 'Profile not found' });
                    reciever = await Reciever.findOneAndUpdate(
                        { user: req.user.id },
                        { $set: recieverData },
                        { new: true }
                    );
                    return res.json({ msg: "Reciever's Profile Updation Success", reciever });
                }
                //create
                else {
                    reciever = new Reciever(recieverData);
                    await reciever.save();
                    return res.json({ msg: "Reciever's Profile successfully created", reciever });
                }
            } catch (err) {
                console.log(err.message);
                res.status(500).send("Server Error");
            }
        })

module.exports = router;
