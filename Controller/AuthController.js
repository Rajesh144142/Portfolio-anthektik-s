const UserModel = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register new user
const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!(username && email && password)) {
      return res.status(400).json({ msg: "Every Fields are Compolsury...." })
    }
    const existingUser = await UserModel.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ msg: "User Already Exists..." })

    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({
      username,
      email,
      password: hashedPassword
    });

    const token = jwt.sign(
      { id: newUser._id, email },
      process.env.JWTKEY,
      { expiresIn: "2h" }
    );
    newUser.token = token;
    newUser.password = undefined;
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true
    };
    res.status(200).cookie('token', token, options).json({
      success: true,
      token,
      user: newUser
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login User

// Changed
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email, password))
      return res.status(400).json({ message: 'All fields are compulsory' });


    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    const token = jwt.sign(
      {
        id: user._id,
        email
      },
      process.env.JWTKEY,
      { expiresIn: "2h" });
    user.token = token;
    user.password = undefined;
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true
    };

    // Send a single response
    return res.status(200).cookie("token", token, options).json({
      success: true,
      token,
      user
    });
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const logout = async (req, res) => {
  try {
    const { email } = req.body;
    res.clearCookie('token').clearCookie('user').status(200).json('Signout success!');
  } catch (error) {
    res.json({ error });
  }
}

module.exports = { signup, signin, logout };
