const router = require("express").Router();
const userRoutes = require("./userRoutes");
const leaderRoutes = require("./leaderBoard");
const gameRoutes = require("./gameRoutes");
const cardRoutes = require("./cardRoutes");
const handRoutes = require("./handRoutes");


router.use("/users", userRoutes);
router.use("/leaderBoard", leaderRoutes);
router.use("/gameRoutes", gameRoutes);
router.use("/card", cardRoutes);
router.use("/hand", handRoutes);

module.exports = router;
