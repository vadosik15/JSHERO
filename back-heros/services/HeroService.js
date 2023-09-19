const HeroModel = require('../models/Hero');

exports.getAllHeros = () => HeroModel.find();
exports.createHero = (hero) => HeroModel.create(hero);
exports.getHeroById = (id) => HeroModel.findById(id);
exports.updateHero = (id, hero) => HeroModel.findByIdAndUpdate(id, hero);
exports.deleteHero = (id) => HeroModel.findByIdAndDelete(id);