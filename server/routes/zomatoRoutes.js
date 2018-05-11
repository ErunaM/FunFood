const zomato = require('zomato');
const client = zomato.createClient({
	userKey: 'a651f223577a8c805de66b3a9ae2ee9a' //as obtained from [Zomato API](https://developers.zomato.com/apis)
});

module.exports = app => {
	app.get('/api/cuisines', (req, res) => {
		client.getCuisines({ city_id: '79' }, function(err, result) {
			if (!err) {
				console.log(result);
				res.send(result);
			} else {
				console.log(err);
				res.send(err);
			}
		});
	});
	app.get('/api/city', (req, res) => {
		client.getCities(
			{
				q: 'Auckland' //query by city name
			},
			function(err, result) {
				if (!err) {
					console.log(result);
					res.send(result);
				} else {
					console.log(err);
					res.send(err);
				}
			}
		);
	});
};
