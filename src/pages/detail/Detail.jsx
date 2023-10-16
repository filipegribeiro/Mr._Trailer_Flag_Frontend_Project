import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import './detail.scss';
import CastList from './CastList';
import VideoList from './VideoList';

import MovieList from '../../components/movie-list/MovieList';

const Detail = () => {
	const { category, id } = useParams();

	const [item, setItem] = useState();

	useEffect(() => {
		const getDetail = async () => {
			const response = await tmdbApi.detail(category, id, { params: {} });
			setItem(response);
			window.scrollTo(0, 0);
		};
		getDetail();
	}, [category, id]);

	return (
		<>
			{item && (
				<>
					<div className='banner' style={{ backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})` }}></div>
					<div className='mb-3 movie-content container'>
						<div className='movie-content__poster'>
							<div className='movie-content__poster__img' style={{ backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})` }}></div>
						</div>
						<div className='movie-content__info'>
							<h1 className='title'>{item.title || item.name}</h1>
							<div className='genres'>
								{item.genres &&
									item.genres.slice(0, 5).map((genre, i) => (
										<span key={i} className='genres__item'>
											{genre.name}
										</span>
									))}
							</div>
							<p className='overview'>{item.overview}</p>
							<div className='cast'>
								<div className='section__header'>
									<h2>Casts</h2>
								</div>
								<CastList id={item.id} />
							</div>
						</div>
					</div>
					<div className='container'>
						<div className='section mb-3'>
							<VideoList id={item.id} />
						</div>
						<div className='section mb-3'>
							<div className='section__header mb-2'>
								<h2>Similar</h2>
							</div>
							<MovieList category={category} type='similar' id={item.id} />
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Detail;

/* Aqui está uma explicação linha por linha do respetivo código:

import React, { useEffect, useState } from 'react';: Importa o pacote react, bem como os hooks useEffect e useState da biblioteca React. Esses hooks são usados para gerenciar estado e efeitos colaterais no componente funcional.

import { useParams } from 'react-router';: Importa o hook useParams da biblioteca react-router. Esse hook permite acessar os parâmetros da URL.

import tmdbApi from '../../api/tmdbApi';: Importa um módulo chamado tmdbApi que contém funções para fazer chamadas à API TMDB.

import apiConfig from '../../api/apiConfig';: Importa um módulo chamado apiConfig que contém informações de configuração para a API TMDB.

import './detail.scss';: Importa um arquivo de estilo chamado detail.scss para estilizar o componente.

import CastList from './CastList';: Importa o componente CastList do arquivo CastList.jsx.

import VideoList from './VideoList';: Importa o componente VideoList do arquivo VideoList.jsx.

import MovieList from '../../components/movie-list/MovieList';: Importa o componente MovieList de um diretório específico no projeto.

const Detail = () => {: Define um componente funcional chamado Detail.

const { category, id } = useParams();: Utiliza o hook useParams para obter os parâmetros category e id da URL.

const [item, setItem] = useState();: Cria um estado chamado item usando o hook useState. O valor inicial do estado é undefined e a função setItem é usada para atualizar o valor do estado.

21-30. Utiliza o hook useEffect para executar um efeito colateral sempre que as dependências [category, id] mudarem. Dentro do efeito, é definida uma função assíncrona getDetail que faz uma chamada à função tmdbApi.detail passando os parâmetros category, id e um objeto de configuração. Em seguida, o resultado da chamada é atribuído ao estado item usando a função setItem. Além disso, o código window.scrollTo(0, 0) é usado para rolar a página para o topo.

35-100. No bloco de retorno, é verificado se o estado item existe. Se existir, é renderizado o conteúdo do detalhe do item. Isso inclui um elemento <div> com a classe banner que exibe uma imagem de fundo, um elemento <div> com a classe movie-content que contém informações sobre o item, como título, gêneros, visão geral e elenco. Além disso, são renderizados os componentes CastList, VideoList e MovieList para exibir informações relacionadas ao item.

export default Detail;: Exporta o componente Detail como o valor padrão do módulo.

O componente Detail é responsável por exibir os detalhes de um filme ou série. Ele utiliza os hooks useParams e useEffect para obter os parâmetros da URL e fazer chamadas à API TMDB para obter os detalhes do item. O componente renderiza as informações do item, como título, gêneros, visão geral e elenco.

Dentro do componente, é renderizado um elemento <div> com a classe banner que exibe uma imagem de fundo usando a propriedade backdrop_path ou poster_path do item. Em seguida, é renderizado um elemento <div> com a classe movie-content que contém duas seções. A primeira seção exibe o cartaz do filme ou série em um elemento <div> com a classe movie-content__poster e uma imagem de fundo usando a propriedade poster_path ou backdrop_path do item. A segunda seção exibe informações sobre o item, como título, gêneros, visão geral e elenco.

Dentro da segunda seção, é renderizado um elemento <h1> com a classe title que exibe o título do item usando a propriedade title ou name do item. Em seguida, é renderizado um elemento <div> com a classe genres que contém os gêneros do item. Os gêneros são renderizados em elementos <span> com a classe genres__item, limitados aos primeiros 5 gêneros do item.

Logo após, é renderizado um elemento <p> com a classe overview que exibe a visão geral do item usando a propriedade overview do item.

Por fim, é renderizado um elemento <div> com a classe cast que contém o elenco do item. Dentro desse elemento, é renderizado um elemento <div> com a classe section__header que exibe o título "Casts". Em seguida, é renderizado o componente CastList passando o id do item como propriedade.

Além disso, o componente Detail também renderiza os componentes VideoList e MovieList para exibir vídeos relacionados ao item e itens similares, respectivamente.

Em resumo, o componente Detail é responsável por exibir os detalhes de um filme ou série, incluindo informações como título, gêneros, visão geral e elenco. Ele utiliza os dados obtidos da API TMDB e renderiza essas informações de forma estruturada. */
