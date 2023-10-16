import React from 'react';

import { useParams } from 'react-router';

import PageHeader from '../components/page-header/PageHeader';

import { category as cate } from '../api/tmdbApi';
import MovieGrid from '../components/movie-grid/MovieGrid';

const Catalog = () => {
	const { category } = useParams();

	return (
		<>
			<PageHeader>{category === cate.movie ? 'Movies' : 'Tv Series'}</PageHeader>
			<div className='container'>
				<div className='section mb-3'>
					<MovieGrid category={category} />
				</div>
			</div>
		</>
	);
};

export default Catalog;

/* Aqui está uma explicação linha por linha do respetivo código:

import React from 'react';: Importa o pacote react para criar componentes React.

import { useParams } from 'react-router';: Importa o hook useParams da biblioteca react-router. Esse hook permite acessar os parâmetros da URL.

import PageHeader from '../components/page-header/PageHeader';: Importa o componente PageHeader do arquivo PageHeader.jsx localizado na pasta ../components/page-header/. Esse componente é responsável por exibir o cabeçalho da página.

import { category as cate } from '../api/tmdbApi';: Importa a constante category do arquivo tmdbApi.js localizado na pasta ../api/ e a renomeia para cate. Essa constante contém os valores das categorias de filmes e séries.

import MovieGrid from '../components/movie-grid/MovieGrid';: Importa o componente MovieGrid do arquivo MovieGrid.jsx localizado na pasta ../components/movie-grid/. Esse componente é responsável por exibir uma grade de filmes ou séries.

const Catalog = () => {: Define um componente funcional chamado Catalog.

const { category } = useParams();: Utiliza o hook useParams para obter o parâmetro category da URL.

15-23. O bloco de retorno do componente Catalog renderiza o componente PageHeader com o texto "Movies" ou "Tv Series" dependendo do valor do parâmetro category. O valor é verificado usando uma expressão ternária. Em seguida, é renderizado um elemento <div> com a classe container que envolve um elemento <div> com a classe section mb-3. Dentro do segundo elemento <div>, é renderizado o componente MovieGrid passando o parâmetro category.

export default Catalog;: Exporta o componente Catalog como o valor padrão do módulo.
O componente Catalog é responsável por exibir a página de catálogo de filmes ou séries. Ele utiliza o hook useParams para obter o parâmetro category da URL e renderiza o cabeçalho da página com base nesse parâmetro. Em seguida, o componente renderiza o componente MovieGrid para exibir uma grade de filmes ou séries, dependendo do valor do parâmetro category.

No projeto em questão, o componente Catalog é utilizado para exibir a página principal do catálogo de filmes e séries. Ele recebe o parâmetro category da URL para determinar se deve exibir a grade de filmes ou a grade de séries. O componente utiliza o componente PageHeader para exibir o cabeçalho da página e o componente MovieGrid para exibir a grade de filmes ou séries. */
