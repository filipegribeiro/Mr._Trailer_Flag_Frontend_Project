const apiConfig = {
	baseUrl: 'https://api.themoviedb.com/3/',
	apiKey: 'e3970f68e5127ec4a6470652f6cf5a36',
	originalImage: imgPath => `https://image.tmdb.org/t/p/original/${imgPath}`,
	w500Image: imgPath => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
