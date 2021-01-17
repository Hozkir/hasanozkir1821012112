var express = require('express');
var router = express.Router();
var ctrlMekanlar=require('../controllers/mekanlar')
var ctrlDigerleri=require('../controllers/digerleri')

router.get('/', ctrlMekanlar.anaSayfa);
router.get('/mekan/:mekanid', ctrlMekanlar.mekanBilgisi);
router.get('/mekan/:mekanid/yorum/yeni', ctrlMekanlar.yorumEkle);
router.get('/hakkinda', ctrlDigerleri.hakkinda);
router.post('/mekan/:mekanid/yorum/yeni', ctrlMekanlar.yorumumuEkle);

module.exports = router;
