const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth')
const Donor = require('../../models/Donor')
const User = require('../../models/User')


router
    //@route        GET api/donor/me
    //@description  Get current donor profile
    //@access       Private
    .get('/all', auth, async (req, res) => {
        try {
            const donor = await Donor.find().populate('user', ['name', 'email', 'contact', 'location']);
            if (!donor) {
                return res.status(400).json({ mssg: 'Profile not found' });
            }
            res.json(donor);
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Server Error");
        }
    })
    //@route        GET api/donor/me
    //@description  Get current donor profile
    //@access       Private
    .get('/search-donor',
        [
            auth,
            check('bloodGroup', 'Blood Group is required').not().isEmpty(),
            // check('location', 'Location is required').not().isEmpty(),
            check('alergy', 'Alergies is required').not().isEmpty(),
        ],
        auth, async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            try {
                const donorLocation = await User.find({ location: req.body.location });
                const donor = await Donor.find({ bloodGroup: req.body.bloodGroup, alergy: req.body.alergy })
                    .populate('user', ['name', 'email', 'contact', 'location']);
                if (donorLocation.length !== 0) {
                    if (donor.length === 0) {
                        // console.log('No Match Found' )
                        return res.status(400).json({ mssg: 'No Match Found' });
                    }
                    // console.log('Found donor');
                    res.json(donor);
                }else{
                    return res.status(400).json({ mssg: 'No Match Found' });
                }
            } catch (err) {
                console.log(err.message);
                res.status(500).send("Server Error");
            }
        })
    //@route        GET api/donor/me
    //@description  Get current donor profile
    //@access       Private
    .get('/current', auth, async (req, res) => {
        try {
            const donor = await Donor.findOne({ user: req.user.id }).populate('user', ['name', 'email', 'contact', 'location']);
            if (!donor) {
                return res.status(400).json({ mssg: 'Profile not found' });
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
            check('gender', 'Gender is required').not().isEmpty(),
            check('age', 'Age is required').not().isEmpty(),
            check('bloodGroup', 'Blood Group is required').not().isEmpty(),
            check('alergy', 'Alergies is required').not().isEmpty()
        ],
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const {
                gender,
                age,
                bloodGroup,
                alergy
            } = req.body;

            const donorData = {};
            donorData.user = req.user.id;
            donorData.age = age;
            donorData.gender = gender;
            donorData.bloodGroup = bloodGroup;
            donorData.alergy = alergy.toLowerCase();

            try {
                let donor = await Donor.findOne({ user: req.user.id });
                //if profile already exist then update it
                if (donor) {
                    // return res.status(400).json({ mssg: 'Profile not found' });
                    donor = await Donor.findOneAndUpdate(
                        { user: req.user.id },
                        { $set: donorData },
                        { new: true }
                    );
                    return res.json({ msg: "Donor's Profile Updation Success", donor });
                }
                //create
                else {
                    donor = new Donor(donorData);
                    await donor.save();
                    return res.json({ msg: "Donor's Profile successfully created", donor });
                }
            } catch (err) {
                console.log(err.message);
                res.status(500).send("Server Error");
            }
        })
module.exports = router;
