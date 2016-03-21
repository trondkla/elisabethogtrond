var swig = require('swig'),
    express = require('express');

var app = express();

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/pages');

// Swig will cache templates for you, but you can disable
 // that and use Express's caching instead, if you like:
 app.set('view cache', false);
 // To disable Swig's cache, do the following:
 var swig_cache = process.env.SWIG_CACHE || "false";
 if (swig_cache == "false") {
   swig_cache = false;
 }
 swig.setDefaults({ cache: false });

 app.use('/image', express.static(__dirname + '/image'));
 app.use('/css', express.static(__dirname + '/css'));
 app.use('/app.js', express.static(__dirname + '/build/app.js'));
 app.use('/pages', express.static(__dirname + '/js/pages'));

app.get('/', function (req, res) {
    var model = {
    };
    res.render('index', model);
});

app.get('/sermoni', function (req, res) {
    res.render('sermoni');
});

app.get('/onskeliste', function (req, res) {
    res.render('wishlist');
});

var port = process.env.PORT || 3000;

app.listen(port);
console.log("Servere startet at http://localhost:" + port);
