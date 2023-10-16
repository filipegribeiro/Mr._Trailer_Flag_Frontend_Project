const apiConfig = {
	baseUrl: 'https://api.themoviedb.org/3/',
	apiKey: 'e3970f68e5127ec4a6470652f6cf5a36',
	originalImage: imgPath => `https://image.tmdb.org/t/p/original/${imgPath}`,
	w500Image: imgPath => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;

// Este código apresenta um objeto chamado apiConfig que contém algumas configurações relacionadas à API do projeto. Esta é a configuração da API:

// baseUrl: Apresenta uma propriedade que define a URL base para todas as chamadas da API. No código atual, a URL base é https://api.themoviedb.org/3/.

// apiKey: Apresenta uma propriedade que armazena a chave da API necessária para fazer chamadas à API. No código atual, a chave da API é e3970f68e5127ec4a6470652f6cf5a36.

// originalImage: Essa propriedade é uma função que recebe um caminho de imagem como parâmetro (imgPath) e retorna a URL completa para a imagem original. A URL é gerada concatenando o caminho da imagem ao URL base da API e à rota /t/p/original/. Por exemplo, se o imgPath for abcd.jpg, a URL completa será https://image.tmdb.org/t/p/original/abcd.jpg.

// w500Image: Essa propriedade é semelhante à propriedade originalImage, mas retorna a URL para uma imagem com tamanho de largura de 500 pixels. A URL é gerada concatenando o caminho da imagem ao URL base da API e à rota /t/p/w500/. Por exemplo, se o imgPath for abcd.jpg, a URL completa será https://image.tmdb.org/t/p/w500/abcd.jpg.

// Essas configurações permitem que você defina a URL base da API, a chave da API e gere URLs completas para imagens com diferentes tamanhos. Isso facilita o uso da API em diferentes partes do seu projeto.
