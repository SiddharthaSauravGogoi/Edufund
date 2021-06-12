import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.model';
import { secretKey } from '../../config/config'

export const register = (req, res) => {
  const { email, password, name, dob, gender } = req.body.userDetails
  console.log(req.body.userDetails)
  const userData = {
    email, password, name, dob, gender
  }
  if (!email || !password || !name) {
    return res.status(422).json({ error: "Please add all the credentials" })
  }
  User.find({ email })
    .then((data) => {
      if (data) {
        res.send({ error: 'Email already registered' });
      } else {
        bcrypt.hash(password, 10, (err, hash) => {
          userData.password = hash;
          User.create(userData, (err, data) => {
            res.status(200).json({ msg: 'Successfully registered' });
          })
        })
      }
    })
    .catch((err) => res.send({ error: err }))
};

export const login = (req, res) => {

  const { email, password } = req.body.userDetails;
  console.log(req.body.userDetails)
  User.findOne({ email: email })
    .then((user) => {
      console.log('users here', user)
      if (!user) {
        res.send({ error: 'Account not found' })
      } else {
        if (!bcrypt.compareSync(password, user.password)) {
          res.send({ error: "You entered a wrong password" })
        } else if (bcrypt.compareSync(password, user.password)) {
          const payload = {
            id: user._id,
            email: user.email
          }
          let token = jwt.sign(payload, secretKey, {
            expiresIn: "1h"
          });
          res.status(200).json({ token, user: user.toJSON() });

        }
      }
    })
    .catch((err) => res.json({ error: err }))
}


