import Cors from 'micro-cors';

const cors = Cors({
	allowedMethods: ['POST', 'HEAD']
});

const page = (req, res) => {
	const {
		query: { page },
	} = req;

	page === 'login' ? doSomething() : res.end(Error);
	function doSomething() {
		res.status(200).json({
			"status": `${res.status()}`,
			"message": "Successfully Logged In.",
			"data": `${req.body}`
		});
	}
};

export default cors(page);
