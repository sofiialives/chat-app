import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
    expiresIn: "14d",
  });

  res.cookie("jwt", token, {
    maxAge: 14 * 24 * 60 * 60 * 1000, // maximum age for cookie to live
    httpOnly: true, // prevent XSS Cross Site Scripting attacks
    sameSite: "strict", // prevent CSRF Cross Site Request Forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookie;
