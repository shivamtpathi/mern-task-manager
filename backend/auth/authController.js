const jwt = require("jsonwebtoken");

const SECRET_KEY = "finzarc-secret";

const login = (req, res) => {
  const { username, password } = req.body;

  // Dummy user
  if (username === "admin" && password === "1234") {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    return res.json({ token });
  }

  return res.status(401).json({ message: "Invalid credentials" });
};

module.exports = { login };
