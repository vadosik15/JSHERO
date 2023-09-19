const heroService = require("../services/HeroService");

exports.getAllHeros = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const heros = await heroService.getAllHeros();
    const paginatedHeros = heros.slice(startIndex, endIndex);

    res.json({ data: paginatedHeros});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createHero = async (req, res) => {
  try {
    const hero = await heroService.createHero(req.body);
    res.json({ data: hero});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getHeroById = async (req, res) => {
  try {
    const hero = await heroService.getHeroById(req.params.id);
    res.json({ data: hero});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateHero = async (req, res) => {
  try {
    const hero = await heroService.updateHero(req.params.id, req.body);
    res.json({ data: hero });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteHero = async (req, res) => {
  try {
    const hero = await heroService.deleteHero(req.params.id);
    res.json({ data: hero});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};