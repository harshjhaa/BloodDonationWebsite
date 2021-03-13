const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

router
  //REGISTER
  //@route        Post api/users
  //@description  Register User
  //@access       Public (no authentication needed)
  .post(
    "/",
    [
      check("name", "Name is required").not().isEmpty(),
      check("email", "Valid email is required").not().isEmpty(),
      check("password", "Password must be greaterthan 3 characters").isLength({
        min: 3,
      }),
      check("contact", "Please enter a valid mobile number").isLength({
        min: 3,
      }),
    ],
    async (req, res) => {
      // console.log(req.body)
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { name, email, password, contact } = req.body;
      try {
        let user = await User.findOne({ email });
        if (user) {
          // console.log('Error: User already exists!');
          return res
            .status(400)
            .json({ errors: [{ msg: "User already exists!" }] });
        }

        user = new User({ name, email, password, contact });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
          user: {
            id: user.id,
          },
        };

        jwt.sign(
          payload,
          config.get("jwtSecret"),
          /* { expiresIn: 36000 }, */ (err, token) => {
            if (err) {
              throw err;
            }
            res.json({ token });
          }
        );
      } catch (err) {
        console.log(err.message);
        res.status(500).json("Server Error");
      }
    }
  )
  //feedback form
  .post(
    "/user-feedback",
    [
      check("feedback", "Feedback is required").not().isEmpty()
    ],
    async (req, res) => {
      // console.log(req.body)
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { feedback } = req.body;
      try {
        let user = await User.findOne({ email });
        if (user) {
          // console.log('Error: User already exists!');
          return res
            .status(400)
            .json({ errors: [{ msg: "User already exists!" }] });
        }

        user = new User({ name, email, password, contact });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
          user: {
            id: user.id,
          },
        };

        jwt.sign(
          payload,
          config.get("jwtSecret"),
          /* { expiresIn: 36000 }, */ (err, token) => {
            if (err) {
              throw err;
            }
            res.json({ token });
          }
        );
      } catch (err) {
        console.log(err.message);
        res.status(500).json("Server Error");
      }
    }
  );

module.exports = router;
