import jwt from "jsonwebtoken";

const generateToken = (user) => {
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );
  return token;
};

export default generateToken;
