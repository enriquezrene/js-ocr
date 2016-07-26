var express = require('express'),
    mongoose = require('mongoose'),
    fs = require('fs');


var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

var mongoUri = 'mongodb://demo_user:demo_password@ds031895.mlab.com:31895/demo_with_express';
mongoose.connect(mongoUri, options);
var db = mongoose.connection;

db.on('error', function () {
    throw new Error('unable to connect to database at ' + mongoUri);
});

db.once('open', function callback () {
    console.log("Connected Successfully...");

    var app = express();

    app.configure(function(){
        app.use(express.bodyParser());
    });

    require('./models/musician');
    require('./routes')(app);

    app.listen(3001);
    console.log('Listening on port 3001...');

});