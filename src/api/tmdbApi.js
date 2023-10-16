import axiosClient from './axiosClient';

export const category = {
	movie: 'movie',
	tv: 'tv',
};

export const movieType = {
	upcoming: 'upcoming',
	popular: 'popular',
	top_rated: 'top_rated',
};

export const tvType = {
	popular: 'popular',
	top_rated: 'top_rated',
	on_the_air: 'on_the_air',
};

const tmdbApi = {
	getMoviesList: (type, params) => {
		const url = 'movie/' + movieType[type];
		return axiosClient.get(url, params);
	},
	getTvList: (type, params) => {
		const url = 'tv/' + tvType[type];
		return axiosClient.get(url, params);
	},
	getVideos: (cate, id) => {
		const url = category[cate] + '/' + id + '/videos';
		return axiosClient.get(url, { params: {} });
	},
	search: (cate, params) => {
		const url = 'search/' + category[cate];
		return axiosClient.get(url, params);
	},
	detail: (cate, id, params) => {
		const url = category[cate] + '/' + id;
		return axiosClient.get(url, params);
	},
	credits: (cate, id) => {
		const url = category[cate] + '/' + id + '/credits';
		return axiosClient.get(url, { params: {} });
	},
	similar: (cate, id) => {
		const url = category[cate] + '/' + id + '/similar';
		return axiosClient.get(url, { params: {} });
	},
};

export default tmdbApi;

// O documento tmdbApi.js é responsável por definir uma série de funções que fazem chamadas à API do projeto relacionadas a filmes e programas de TV do The Movie Database (TMDb). Aqui está uma explicação do código passo a passo:

// O código importa a instância do cliente Axios do arquivo axiosClient.js usando a sintaxe import axiosClient from './axiosClient'. Essa importação permite que as funções definidas neste arquivo façam chamadas HTTP para a API usando o cliente Axios configurado.

// O código define três constantes:
// category: Um objeto que define as categorias disponíveis para a API (filme e programa de TV).
// movieType: Um objeto que define os tipos de filmes disponíveis para a API (próximos lançamentos, populares e mais bem avaliados).
// tvType: Um objeto que define os tipos de programas de TV disponíveis para a API (populares, mais bem avaliados e no ar atualmente).

// Em seguida, o código define o objeto tmdbApi, que contém várias funções para fazer chamadas à API:
// getMoviesList: Uma função que recebe um tipo de filme e parâmetros opcionais e faz uma chamada GET para obter a lista de filmes correspondente ao tipo.
// getTvList: Uma função que recebe um tipo de programa de TV e parâmetros opcionais e faz uma chamada GET para obter a lista de programas de TV correspondente ao tipo.
// getVideos: Uma função que recebe uma categoria (filme ou programa de TV) e um ID e faz uma chamada GET para obter os vídeos relacionados ao item.
// search: Uma função que recebe uma categoria (filme ou programa de TV) e parâmetros de pesquisa e faz uma chamada GET para pesquisar itens correspondentes à categoria.
// detail: Uma função que recebe uma categoria (filme ou programa de TV), um ID e parâmetros opcionais e faz uma chamada GET para obter detalhes do item
// credits: Uma função que recebe uma categoria (filme ou programa de TV) e um ID e faz uma chamada GET para obter os créditos do item.
// similar: Uma função que recebe uma categoria (filme ou programa de TV) e um ID e faz uma chamada GET para obter itens similares ao item.

// Por fim, o código exporta o objeto tmdbApi como padrão, para que possa ser importado e usado em outros arquivos do projeto.

// Em resumo, o documento tmdbApi.js define um conjunto de funções que fazem chamadas à API do The Movie Database (TMDb) para obter informações sobre filmes e programas de TV. Essas funções usam a instância do cliente Axios do arquivo axiosClient.js para fazer as chamadas HTTP.
