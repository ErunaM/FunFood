const zomato = require('zomato');
const client = zomato.createClient({
	userKey: 'a651f223577a8c805de66b3a9ae2ee9a' //as obtained from [Zomato API](https://developers.zomato.com/apis)
});

module.exports = app => {
	app.post('/api/cuisines', (req, res) => {
		var t = req.body.data.id;
		//console.log(t);

		client.getCuisines({ city_id: t }, function(err, result) {
			if (!err) {
				//console.log(result);
				res.send(result);
			} else {
				console.log(err);
				res.send(err);
			}
		});
	});
	app.post('/api/city', (req, res) => {
		//receives city name should return a list of categories of food
		const { searchbar } = req.body;
		client.getCities(
			{
				q: searchbar, //query by city name
				country_name: 'New Zealand'
			},
			function(err, result) {
				if (!err) {
					var t = JSON.parse(result);
					const city = t.location_suggestions[0]; // gives me the city object
					//console.log(city);
					res.send(city);
				} else {
					z = {};
					console.log(err);
					res.send(err);
				}
			}
		);
	});
};
