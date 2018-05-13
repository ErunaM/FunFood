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
	app.post('/api/city', (req, res) => {
		const { searchbar } = req.body;
		client.getCities(
			{
				q: searchbar, //query by city name
				country_name: 'New Zealand'
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
