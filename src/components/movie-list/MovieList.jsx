import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './movie-list.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

import tmdbApi, { category } from '../../api/tmdbApi';

import MovieCard from '../movie-card/MovieCard';

const MovieList = props => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const getList = async () => {
			let response = null;

			const params = {};

			if (props.type !== 'similar') {
				switch (props.category) {
					case category.movie:
						response = await tmdbApi.getMoviesList(props.type, { params });

						break;

					default:
						response = await tmdbApi.getTvList(props.type, { params });
				}
			} else {
				response = await tmdbApi.similar(props.category, props.id);
			}

			setItems(response.results);
		};

		getList();
	}, [props.category, props.id, props.type]);

	return (
		<div className='movie-list'>
			{items.length > 0 && (
				<Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
					{items.map((item, i) => (
						<SwiperSlide key={i}>
							<MovieCard item={item} category={props.category} />
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</div>
	);
};

MovieList.propTypes = {
	category: PropTypes.string.isRequired,

	type: PropTypes.string.isRequired,
};

export default MovieList;

/* O documento MovieList.jsx é um componente React que faz parte do projeto.
Aqui está a explicação linha por linha:

import React, { useState, useEffect } from 'react';: Importa a biblioteca React e os hooks useState e useEffect do React.

import PropTypes from 'prop-types';: Importa o módulo PropTypes para definir as propriedades esperadas pelo componente.

import './movie-list.scss';: Importa o arquivo de estilo movie-list.scss para estilizar o componente.

import { Swiper, SwiperSlide } from 'swiper/react';: Importa os componentes Swiper e SwiperSlide da biblioteca swiper/react. Esses componentes serão usados para criar um carrossel de filmes.

import tmdbApi, { category } from '../../api/tmdbApi';: Importa o objeto tmdbApi e a constante category do arquivo tmdbApi.js localizado na pasta api. Esses são os métodos e categorias disponíveis para acessar a API do TMDb.

import MovieCard from '../movie-card/MovieCard';: Importa o componente MovieCard do arquivo MovieCard.jsx localizado na pasta movie-card.

const MovieList = props => {: Define o componente MovieList como uma função que recebe as propriedades (props).

const [items, setItems] = useState([]);: Define o estado items como um array vazio, usando o hook useState. O estado items armazenará os itens da lista de filmes.

useEffect(() => {: Inicia um efeito colateral usando o hook useEffect. Esse efeito será executado quando o componente for montado ou quando as propriedades category, id ou type forem alteradas.

const getList = async () => {: Define uma função assíncrona chamada getList. Essa função será usada para obter a lista de filmes a ser exibida.

let response = null;: Declara uma variável response e a inicializa como null.

const params = {};: Declara uma constante params e a inicializa como um objeto vazio. Essa constante será usada para passar parâmetros opcionais para a API do TMDb.

if (props.type !== 'similar') {: Verifica se o valor da propriedade type é diferente de 'similar'. Se for diferente, entra no bloco de código.

switch (props.category) {: Inicia um bloco switch com base no valor da propriedade category.

case category.movie:: Se o valor de props.category for igual a category.movie, entra no bloco de código.

response = await tmdbApi.getMoviesList(props.type, { params });: Chama o método getMoviesList da API do TMDb, passando o valor de props.type como o tipo de lista de filmes a ser obtida e params como os parâmetros opcionais. O resultado é armazenado na variável response.

default:: Se nenhum dos casos anteriores corresponder, executa o bloco de código padrão.

response = await tmdbApi.getTvList(props.type, { params });: Chama o método getTvList da API do TMDb, passando o valor de props.type como o tipo de lista de programas de TV a ser obtida e params como os parâmetros opcionais. O resultado é armazenado na variável response.

response = await tmdbApi.similar(props.category, props.id);: Se o valor de props.type for igual a 'similar', chama o método similar da API do TMDb, passando props.category como a categoria e props.id como o ID do filme. O resultado é armazenado na variável response.

setItems(response.results);: Atualiza o estado items com os resultados obtidos da API.

getList();: Chama a função getList definida anteriormente para obter a lista de filmes assim que o componente for montado ou quando as propriedades category, id ou type forem alteradas.

return (: Retorna o JSX do componente.

<div className='movie-list'>: Renderiza um elemento div com a classe CSS 'movie-list'.

{items.length > 0 && (: Verifica se o tamanho do array items é maior que zero. Se for verdadeiro, entra no bloco de código.

<Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>: Renderiza o componente Swiper da biblioteca swiper/react. Esse componente é responsável por criar um carrossel de filmes. Os atributos grabCursor, spaceBetween e slidesPerView são definidos como true, 10 e 'auto', respectivamente.

{items.map((item, i) => (: Mapeia cada item do array items e retorna um elemento SwiperSlide para cada item.

<SwiperSlide key={i}>: Renderiza um elemento SwiperSlide com a chave i.

<MovieCard item={item} category={props.category} />: Renderiza o componente MovieCard passando item como propriedade item e props.category como propriedade category.

)}: Fecha o bloco de código do mapeamento do array items.

)}: Fecha o bloco de código do condicional {items.length > 0 && (.

);: Fecha o elemento Swiper.

};: Fecha o componente MovieList.

MovieList.propTypes = {: Define as propriedades esperadas pelo componente MovieList usando o módulo PropTypes.

export default MovieList;: Exporta o componente MovieList para que possa ser importado e utilizado em outros arquivos. */
