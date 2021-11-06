import {conciseUrl } from './../src/Trades/Web.js';

    var urls = [
    "http://newyorker.com",
    "http://imdb.com",
    "http://toplist.cz",
    "http://nytimes.com",
    "http://tripadvisor.com",
    "http://dagondesign.com",
    "http://kickstarter.com",
    "http://mapy.cz",
    "http://hud.gov",
    "http://rakuten.co.jp",
    "http://latimes.com",
    "http://army.mil",
    "http://marriott.com",
    "http://guardian.co.uk",
    "http://nationalgeographic.com",
    "http://cyberchimps.com",
    "http://privacy.gov.au",
    "http://slate.com",
    "http://ocn.ne.jp",
    "http://cnbc.com",
    "http://dailymotion.com",
    "http://google.ca",
    "http://deviantart.com",
    "http://rediff.com",
    "http://shareasale.com",
    "http://japanpost.jp",
    "http://tripod.com",
    "http://nyu.edu",
    "http://mac.com",
    "http://yolasite.com",
    "http://smh.com.au",
    "http://networkadvertising.org",
    "http://amazon.co.uk",
    "http://youtube.com",
    "http://gravatar.com",
    "http://wordpress.org",
    "http://netlog.com",
    "http://vk.com",
    "http://narod.ru",
    "http://wikipedia.org",
    "http://mayoclinic.com",
    "http://va.gov",
    "http://wix.com",
    "http://ftc.gov",
    "http://mysql.com",
    "http://ft.com",
    "http://nba.com",
    "http://multiply.com",
    "http://businessinsider.com",
    "http://stumbleupon.com"
 ];

 function elm(u){
     let p = document.createElement('P');
     p.textContent = u+" → "+conciseUrl(u);
     document.body.append(p);
 }
 urls.forEach(u => elm(u));
