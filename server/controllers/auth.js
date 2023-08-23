import User from "../Models/Users.js";
import bcrypt from "bcrypt";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

//register new user
// export const register = async (req, res, next) => {
//   try {

//     //generate the hashing method to conceal the password
//     const salt = bcrypt.genSaltSync(10);
//     //hash the user password for added security
//     const hash = bcrypt.hashSync(req.body.password, salt);

//     const newUser = new User({
//       ...req.body,
//       password: hash,
//     });

//     await newUser.save();
//     res.status(200).send("User has been created.");
//   } catch (err) {
//     next(err);
//   }
// };

const ADMIN_SECRET_CODE = '12349';

export const register = async (req, res, next) => {
  try {
    const { username, email, password, isAdmin, secretCode } = req.body;

    // Check if user is admin and secret code matches
    if (isAdmin && secretCode === ADMIN_SECRET_CODE) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      // Save user with isAdmin set to true
      const newUser = new User({
        username,
        email,
        password: hash,
        isAdmin: true,
      });
      await newUser.save();
      return res.status(200).send("Admin user has been created.");
    } else {
      // Save user with isAdmin set to false
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      const newUser = new User({
        username,
        email,
        password: hash,
      });
      await newUser.save();
      return res.status(200).send("User has been created.");
    }
  } catch (err) {
    next(err);
  }
};

//login user
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or email!"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      "secret12345"
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res.status(200).json({
      token, 
      details: { ...otherDetails },
      isAdmin,
    });
  } catch (err) {
    next(err);
  }
};