var express = require("express"),
	path = require("path"),
	morgan = require("morgan"),
	port = process.env.PORT || 3000,
	app = express();

app.use(morgan("dev"));
app.use(express.static("static"));
app.use(logErr);

function logErr(err, rq, rs, next){
	console.error(err.stack);
	next(err);
};

app.post("/", function(rq, rs, next) {
	console.log('D' + rq.body.diceForm);
	_.templateSettings.variable = "dice";
	
	var template = _.template(
						 $( "script.template" ).html()
	);

	var templateData = function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (rq.body.diceForm - min + 1)) + min;
	}

	$( "br" ).after(
			template( templateData )
	);
});

app.listen(port, function() {
	console.log("Listening on port 3000");
});
