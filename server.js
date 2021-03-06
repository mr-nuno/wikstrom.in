var express = require('express');
var http = require('http');
var app = express();
var path = require('path');

app.set('port', process.env.PORT || 8080)
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, '/css')));
app.use('/img', express.static(path.join(__dirname, '/img')));
app.use('/js', express.static(path.join(__dirname, '/js')));

app.get('/', function(req,res) {
	res.sendfile('index.html');
});

app.get('/api/stats/:game/:nickname', function(req,res) {

	/*var request = httpsync.get({ url : "http://www.easports.com/services/statscentral/getdata?platformTag=hockey-" + req.params.game +"-PS3&mode=versus&handle=" + req.params.nickname});
	var response = request.end();
	res.type('application/json');*/
	res.send('{}');

});

//http://www.easports.com/services/statscentral/getdata?platformTag=hockey-nhl-14-PS3&mode=solo&handle=mr_nuno

var port = process.argv.length < 3 ? process.env.PORT : process.argv[2];
var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});
