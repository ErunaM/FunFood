const express = require('express');
var zomato = require('zomato');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

var client = zomato.createClient({
	userKey: 'a651f223577a8c805de66b3a9ae2ee9a' //as obtained from [Zomato API](https://developers.zomato.com/apis)
});

require('./routes/zomatoRoutes')(app);

app.listen(5000);
