var config = require('./server/config');
var app = require('./server/app');

app.listen(config.port);
console.log('Listening on http://localhost:'+ config.port);
