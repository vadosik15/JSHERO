const express = require("express");
const {
  getAllHeros,
  createHero,
  getHeroById,
  updateHero,
  deleteHero,
} = require("../controllers/HeroController");

const router = express.Router();

router.route("/").get(getAllHeros).post(createHero);
router.route("/:id").get(getHeroById).put(updateHero).delete(deleteHero);

module.exports = router;