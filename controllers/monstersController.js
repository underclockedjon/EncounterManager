const mongoose = require('mongoose');
const Monster = mongoose.model('Monster');


exports.getRandomMonster = async (req, res) => {
    res.json({fake:"this is fake data"})
};

exports.createMonster = async (req, res) => {
    const monster = await (new Monster(req.body)).save();
    res.json(monster);
};