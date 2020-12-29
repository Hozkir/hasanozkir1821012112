var express = require('express');
var router = express.Router();
const anaSayfa=function(req, res, next) {
  res.render('mekanlar-liste',
    {
      'baslik': 'Anasayfa',
      'sayfaBaslik':{
      	 'siteAd':'Mekan32',
      	 'aciklama':'Isparta civarındaki mekanları keşfedin!'
      },
      'mekanlar':[
        {
        	'ad':'Starbucks',
        	'adres':'Centrum Garden',
        	'puan':'3',
        	'imkanlar':['kahve','çay','pasta'],
        	'mesafe':'10km'
        },
        {
        	'ad':'Gloria Jeans',
        	'adres':'Iyaş AVM',
        	'puan':'2',
        	'imkanlar':['kahve','kek','çay'],
        	'mesafe':'5km'
        }
        ] 
     }   
  	);
}



const mekanBilgisi=function(req, res, next) {
  res.render('mekan-detay', 
    {
      'baslik': 'Mekan Bilgisi',
      'sayfaBaslik':'Starbucks',
      'mekanBilgisi':{
      	  'ad':'Starbucks',
      	  'adres':'Centrum Garden',
      	  'puan':3,
      	  'imkanlar':['Kahve','Pasta','Kek'],
      	  'koordinatlar':{
      	  	  'enlem':'37.781885',
      	  	  'boylam':'30.566034'
      	  },
      	  'saatler':[
              {
              	'gunler':'Pazartesi-Cuma',
              	'acilis':'07:00',
              	'kapanis':'23.00',
              	'kapali':false
              },
              {
              	'gunler':'Pazartesi-Cuma',
              	'acilis':'09:00',
              	'kapanis':'22.30',
              	'kapali':false
              },
              {
              	'gunler':'Pazar',
              	'kapali':true
              }
      	  ],
      	  'yorumlar':[
              {
              	'yorumYapan': 'Hasan ÖZKIR',
              	'puan':3,
              	'tarih':'20 Aralık 2020',
              	'yorumMetni':'Kahve ve kekler şahane'
              },
              {
              	'yorumYapan': 'Hasan ÖZKIR',
              	'puan':3,
              	'tarih':'20 Aralık 2020',
              	'yorumMetni':'Kahve ve kekler şahane'
              },
              {
              	'yorumYapan': 'Hasan ÖZKIR',
              	'puan':3,
              	'tarih':'20 Aralık 2020',
              	'yorumMetni':'Kahve ve kekler şahane'
              }
      	  ]
      }
      }   
  	);
}

const yorumEkle=function(req, res, next) {
  res.render('yorum-ekle', { title: 'Yorum Ekle'});
}

module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle
}