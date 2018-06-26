const express = require('express');
const router = express.Router();
const monsterController = require('../controllers/monstersController');

// Do work here
router.get('/', (req, res) => {
  res.send('Hey! It works!');
});

router.get('/monsters', monsterController.getRandomMonster);
router.post('/monsters', monsterController.createMonster);
module.exports = router;