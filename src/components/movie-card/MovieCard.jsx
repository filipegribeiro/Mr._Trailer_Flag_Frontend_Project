import React from 'react';

import './movie-card.scss';

import { Link } from 'react-router-dom';

import Button from '../button/Button';
/* import OutlineButton from '../button/OutlineButton'; */

import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const MovieCard = props => {
	const item = props.item;

	const link = '/' + category[props.category] + '/' + item.id;

	const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

	return (
		<Link to={link}>
			<div className='movie-card' style={{ backgroundImage: `url(${bg})` }}>
				<Button>
					<i className='bx bx-play'></i>
				</Button>
			</div>
			<h3>{item.title || item.name}</h3>
		</Link>
	);
};

export default MovieCard;

// O documento MovieCard.jsx é um componente React que faz parte do projeto. Ele é responsável por renderizar um cartão de filme na interface do usuário.

// Aqui está uma explicação básica do código:

// O código importa a biblioteca React.

// O componente MovieCard é definido como uma função que recebe as propriedades item e category.

// O componente MovieCard usa as propriedades item e category para construir um link que redireciona para uma rota específica com base na categoria e no ID do item.

// O componente também usa a função apiConfig.w500Image para obter a URL da imagem de fundo do cartão do filme, com base no caminho do pôster ou do plano de fundo do item.

// O componente retorna um JSX que representa o cartão do filme. O JSX é envolvido em um componente Link do React Router que redireciona para a rota do filme.

// O cartão do filme é representado por um elemento <div> com a classe movie-card. A propriedade style é usada para definir a imagem de fundo do cartão com base na URL da imagem obtida anteriormente.

// Dentro do cartão do filme, é renderizado um componente Button que possui um ícone de reprodução.

// Abaixo do cartão do filme, é renderizado um elemento <h3> contendo o título do filme, que pode ser obtido das propriedades item.title ou item.name.

// Finalmente, o componente MovieCard é exportado como padrão para que possa ser usado em outros componentes do projeto.

// Resumidamente, o documento MovieCard.jsx é responsável por renderizar um cartão de filme na interface do usuário do projeto. Ele exibe uma imagem de fundo do filme, um botão de reprodução e o título do filme. O cartão do filme também é um link que redireciona para uma rota específica com base na categoria e no ID do filme.
