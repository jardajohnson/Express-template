const express = require('express');
const app = express();
require('./server/routes/person.routes')(app); // This is new

app.listen(8080, () => {
	console.log('Listening at Port 8080');
});
