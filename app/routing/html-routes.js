var path = require('path'); 

// Routes

module.exports = function(app){

app.get('/', function(req, res){
	
	res.sendFile(path.join(__dirname + '/../public/home.html'));
});

app.get('/survey', function(req, res){

	res.sendFile(path.join(__dirname + '/../public/survey.html'));
});

app.get('/new', function(req, res){
	
	res.sendFile(path.join(__dirname + '/../public/new.html'));
});

app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});


}