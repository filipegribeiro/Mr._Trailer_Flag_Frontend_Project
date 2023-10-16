import React from 'react';
import { Link } from 'react-router-dom';

import OutlineButton from '../components/button/OutlineButton';
import HeroSlide from '../components/hero-slide/HeroSlide';
import MovieList from '../components/movie-list/MovieList';

import { category, movieType, tvType } from '../api/tmdbApi';

const Home = () => {
	return (
		<>
			{<HeroSlide />}
			<div className='container'>
				{
					<div className='section mb-3'>
						<div className='section__header mb-2'>
							<h2>Trending Movies</h2>
							<Link to='/movie'>
								<OutlineButton className='small'>View more</OutlineButton>
							</Link>
						</div>
						<MovieList category={category.movie} type={movieType.popular} />
					</div>
				}

				<div className='section mb-3'>
					<div className='section__header mb-2'>
						<h2>Top Rated Movies</h2>
						<Link to='/movie'>
							<OutlineButton className='small'>View more</OutlineButton>
						</Link>
					</div>
					<MovieList category={category.movie} type={movieType.top_rated} />
				</div>

				<div className='section mb-3'>
					<div className='section__header mb-2'>
						<h2>Trending TV</h2>
						<Link to='/tv'>
							<OutlineButton className='small'>View more</OutlineButton>
						</Link>
					</div>
					<MovieList category={category.tv} type={tvType.popular} />
				</div>

				<div className='section mb-3'>
					<div className='section__header mb-2'>
						<h2>Top Rated TV</h2>
						<Link to='/tv'>
							<OutlineButton className='small'>View more</OutlineButton>
						</Link>
					</div>
					<MovieList category={category.tv} type={tvType.top_rated} />
				</div>
			</div>
		</>
	);
};

export default Home;

/* Aqui está uma explicação linha por linha do respetivo código:

import React from 'react';: Importa o pacote react para criar componentes React.

import { Link } from 'react-router-dom';: Importa o componente Link da biblioteca react-router-dom. Esse componente permite criar links para navegar entre as páginas do aplicativo.

import OutlineButton from '../components/button/OutlineButton';: Importa o componente OutlineButton do arquivo OutlineButton.jsx localizado na pasta ../components/button/. Esse componente é responsável por exibir um botão com estilo de contorno.

import HeroSlide from '../components/hero-slide/HeroSlide';: Importa o componente HeroSlide do arquivo HeroSlide.jsx localizado na pasta ../components/hero-slide/. Esse componente é responsável por exibir um slide de destaque na página inicial.

import MovieList from '../components/movie-list/MovieList';: Importa o componente MovieList do arquivo MovieList.jsx localizado na pasta ../components/movie-list/. Esse componente é responsável por exibir uma lista de filmes ou séries.

import { category, movieType, tvType } from '../api/tmdbApi';: Importa as constantes category, movieType e tvType do arquivo tmdbApi.js localizado na pasta ../api/. Essas constantes contêm os valores das categorias de filmes, os tipos de filmes e os tipos de séries.

const Home = () => {: Define um componente funcional chamado Home.

15-45. O bloco de retorno do componente Home renderiza vários elementos HTML e componentes do projeto. Os elementos estão organizados em seções div com a classe section mb-3. Cada seção contém um cabeçalho com um título, um botão de link para visualizar mais conteúdo e um componente MovieList para exibir a lista de filmes ou séries correspondente à seção.

export default Home;: Exporta o componente Home como o valor padrão do módulo.
O componente Home é responsável por exibir a página inicial do aplicativo. Ele renderiza um slide de destaque utilizando o componente HeroSlide, seguido por várias seções que exibem listas de filmes e séries populares e com as melhores avaliações. Cada seção utiliza o componente MovieList para exibir a lista correspondente.

No projeto em questão, o componente Home é a página inicial do aplicativo. Ele exibe um slide de destaque e várias seções de filmes e séries populares. Cada seção possui um botão de link que redireciona para a página correspondente de filmes ou séries. O componente Home utiliza os componentes HeroSlide e MovieList para exibir o conteúdo da página inicial. */
