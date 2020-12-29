var express = require('express');
var router = express.Router();
var crtlMekanlar = require("../controllers/mekanlar");
var crtlYorumlar = require("../controllers/yorumlar");

router
.route('/mekanlar')
.get(crtlMekanlar.mekanlariListele)
.post(crtlMekanlar.mekanEkle);

router
.route('/mekanlar/:mekanid')
.get(crtlMekanlar.mekanGetir)
.put(crtlMekanlar.mekanGuncelle)
.delete(crtlMekanlar.mekanSil);

router
.route('/mekanlar/:mekanid/yorumlar')
.post(crtlYorumlar.yorumEkle);
router
.route('/mekanlar/:mekanid/yorumlar/:yorumid')
.get(crtlYorumlar.yorumGetir)
.put(crtlYorumlar.yorumGuncelle)
.delete(crtlYorumlar.yorumSil);
module.exports=router;