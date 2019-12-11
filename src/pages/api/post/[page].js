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
			'page': `${page}`,
			'success': `true`
		});
	}
}

export default cors(page);
