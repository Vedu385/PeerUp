// backend/src/routes/authRoutes.js
const router = require("express").Router();
const { register, login } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);

module.exports = router;
// export {router}
// export default router;