import axios from 'axios';
import queryString from 'query-string';

import apiConfig from './apiConfig';

const axiosClient = axios.create({
	baseURL: apiConfig.baseUrl,
	headers: {
		'Content-Type': 'application/json',
	},
	paramsSerializer: params => queryString.stringify({ ...params, api_key: apiConfig.apiKey }),
});

axiosClient.interceptors.request.use(async config => config);

axiosClient.interceptors.response.use(
	response => {
		if (response && response.data) {
			return response.data;
		}

		return response;
	},
	error => {
		throw error;
	},
);

export default axiosClient;

// O documento axiosClient.js é responsável por criar uma instância do cliente Axios para fazer chamadas HTTP na API do projeto. Aqui está uma explicação do código passo a passo:

// Primeiro, o código importa as bibliotecas axios e queryString do pacote axios e query - string, respectivamente. Essas bibliotecas serão usadas para fazer as chamadas HTTP e serializar os parâmetros da URL.

// Em seguida, o código importa o objeto apiConfig do arquivo apiConfig.js. Essa importação permite que o código acesse as configurações da API, como a URL base e a chave da API.

// O código cria uma instância do cliente Axios usando o método create() e atribui a essa instância a variável axiosClient. A instância do cliente é configurada com as seguintes opções:

// baseURL: Define a URL base para todas as chamadas da API, usando a propriedade baseUrl do objeto apiConfig.
// headers: Define os cabeçalhos da requisição HTTP. No código atual, apenas o cabeçalho Content-Type é definido como application/json.
// paramsSerializer: Define uma função que serializa os parâmetros da URL, adicionando automaticamente a chave da API em todas as requisições. A função usa a biblioteca queryString para serializar os parâmetros, adicionando a chave api_key com o valor da propriedade apiKey do objeto apiConfig.

// Em seguida, o código define interceptores de requisição e resposta para o cliente Axios. O interceptor de requisição é usado para modificar e retornar a configuração da requisição antes que ela seja enviada. O interceptor de resposta é usado para modificar e retornar a resposta antes que ela seja processada. No código atual, o interceptor de resposta verifica se a resposta existe e se contém dados. Se sim, ele retorna apenas os dados da resposta; caso contrário, ele retorna a resposta original.

// Por fim, o código exporta a instância do cliente Axios como padrão, para que possa ser importada e usada em outros arquivos do projeto.

// Em resumo, o documento axiosClient.js cria uma instância do cliente Axios configurada com as opções definidas no objeto apiConfig. Essa instância é usada para fazer chamadas HTTP na API do projeto, adicionando automaticamente a chave da API em todas as requisições.
