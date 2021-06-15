import axios from 'axios';

const fetchFromStrapi = async (path) => {
	const url = `https://personalprojectbackend.herokuapp.com/${path}`;
	const res = await axios.get(url);
	return res.data;
};

export default fetchFromStrapi;
