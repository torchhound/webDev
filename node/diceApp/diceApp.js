var express = require("express"),
	path = require("path"),
	morgan = require("morgan"),
	underscore = require("underscore"),
	mustache = require("mustache"),
	port = process.env.PORT || 3000,
	app = express();

app.use(express.bodyParser());
app.use(morgan("dev"));
app.use(express.static("static"));
app.use(logErr);

function logErr(err, rq, rs, next){
	console.error(err.stack);
	next(err);
};

app.post("/", function(rq, rs, next) {
	console.log('D' + rq.body.diceForm);
	var rng = _.random(1, rq.body.diceForm);
	rs.render("index.html", { locals{rng: rng}});
});

app.listen(port, function() {
	console.log("Listening on port 3000");
});
