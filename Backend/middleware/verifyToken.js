const  jwt =require("jsonwebtoken");
 const auth = (req, res, next) => {
  try {
    const { token } = req.cookies;
    // console.log(token);
    if (!token) {
      res.statuse(403).json({ msg: "token is not present..." })
    }
    try {
      const decoded = jwt.verify(token, process.env.JWTKEY);
      req.user = decoded
      console.log(decoded);

    } catch (error) {
      res.status(401).json({ msg: "Invalid token....." })
    }

    return next();
  } catch (error) {
    res.json({ msg: "You are not Authenticated" })
  }
};

module.exports=auth;