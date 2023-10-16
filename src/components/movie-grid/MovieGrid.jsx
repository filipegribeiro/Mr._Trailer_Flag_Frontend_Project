import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './movie-grid.scss';

import MovieCard from '../movie-card/MovieCard';
import Button from '../button/Button';
import OutlineButton from '../button/OutlineButton';
import Input from '../input/Input';

import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';

const MovieGrid = props => {
	const [items, setItems] = useState([]);

	const [page, setPage] = useState(1);
	const [totalPage, setTotalPage] = useState(0);

	const { keyword } = useParams();

	useEffect(() => {
		const getList = async () => {
			let response = null;

			if (keyword === undefined) {
				const params = {};
				switch (props.category) {
					case category.movie:
						response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
						break;
					default:
						response = await tmdbApi.getTvList(tvType.popular, { params });
				}
			} else {
				const params = {
					query: keyword,
				};
				response = await tmdbApi.search(props.category, { params });
			}
			setItems(response.results);
			setTotalPage(response.total_pages);

			console.log('41', response.total_pages);
		};
		getList();
	}, [props.category, keyword]);

	const loadMore = async () => {
		let response = null;

		if (keyword === undefined) {
			const params = {
				page: page + 1,
			};
			switch (props.category) {
				case category.movie:
					response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
					break;
				default:
					response = await tmdbApi.getTvList(tvType.popular, { params });
			}
		} else {
			const params = {
				page: page + 1,
				query: keyword,
			};
			response = await tmdbApi.search(props.category, { params });
		}
		setItems([...items, ...response.results]);
		setPage(page + 1);
	};

	return (
		<>
			<div className='section mb-3'>
				<MovieSearch category={props.category} keyword={keyword} />
			</div>
			<div className='movie-grid'>
				{items.map((item, i) => (
					<MovieCard category={props.category} item={item} key={i} />
				))}
			</div>
			{page < totalPage ? (
				<div className='movie-grid__loadmore'>
					<OutlineButton className='small' onClick={loadMore}>
						Load more
					</OutlineButton>
				</div>
			) : null}
		</>
	);
};

const MovieSearch = props => {
	const navigate = useNavigate();

	const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

	const goToSearch = useCallback(() => {
		if (keyword.trim().length > 0) {
			navigate(`${category[props.category]}/search?query=${keyword}`);
		}
	}, [keyword, props.category, navigate]);

	useEffect(() => {
		const enterEvent = e => {
			e.preventDefault();
			if (e.keyCode === 13) {
				goToSearch();
			}
		};
		document.addEventListener('keyup', enterEvent);
		return () => {
			document.removeEventListener('keyup', enterEvent);
		};
	}, [keyword, goToSearch]);

	/* return (
		<div className='movie-search'>
			<Input type='text' placeholder='Enter keyword' value={keyword} onChange={e => setKeyword(e.target.value)} />
			<Button className='small' onClick={goToSearch}>
				Search
			</Button>
		</div>
	); */
};

export default MovieGrid;

/* O documento MovieGrid.jsx é um componente React que faz parte do projeto. Ele é responsável por renderizar uma grade de filmes na interface do usuário. 

Vamos analisar linha por linha para entender o que ele faz:

Importamos as dependências necessárias do React e do React Router DOM, bem como alguns componentes e estilos personalizados.

Definimos o componente MovieGrid como uma função que recebe props como argumento.

Dentro do componente MovieGrid, usamos o hook useState para criar o estado items, que é inicializado com um array vazio. Esse estado será usado para armazenar os itens da grade de filmes.

Também usamos o hook useState para criar os estados page e totalPage, que são inicializados como 1 e 0, respectivamente. Esses estados serão usados para controlar a paginação dos resultados.

Usamos o hook useParams do React Router DOM para obter a palavra-chave da URL.

Usamos o hook useEffect para definir um efeito colateral que será executado sempre que as dependências [props.category, keyword] mudarem. Dentro do efeito, definimos uma função assíncrona chamada getList que realiza uma chamada à API para obter a lista de filmes.

Dentro da função getList, verificamos se a palavra-chave é undefined. Se for, usamos a categoria fornecida nas props para determinar qual lista de filmes buscar (filmes em breve ou programas de TV populares).

Caso contrário, definimos a palavra-chave como um parâmetro de consulta e usamos a função de pesquisa da API para buscar itens correspondentes à categoria fornecida.

Depois de obter a resposta da API, atualizamos o estado items com os resultados e totalPage com o número total de páginas.

O componente MovieGrid renderiza um elemento div que contém o componente MovieSearch, passando as props.category e keyword como propriedades.

Em seguida, renderizamos um elemento div com a classe movie-grid, que contém uma lista de componentes MovieCard. Cada MovieCard representa um item da grade de filmes e recebe a categoria e o item como propriedades.

Em seguida, verificamos se a página atual é menor que o número total de páginas. Se for, renderizamos um botão "Load more" que, quando clicado, chama a função loadMore.

A função loadMore é assíncrona e é responsável por buscar mais itens da API com base na página atual e na palavra-chave (se houver).

Após obter a resposta da API, atualizamos o estado items concatenando os novos resultados e incrementamos a página atual.

Em seguida, temos o componente MovieSearch, que é usado pelo MovieGrid para permitir que os usuários pesquisem filmes. Vamos analisar esse componente:

O componente MovieSearch é definido como uma função que recebe props como argumento.

Dentro do componente MovieSearch, usamos o hook useState para criar o estado keyword, que é inicializado com o valor de props.keyword (se existir) ou uma string vazia. Esse estado será usado para armazenar a palavra-chave da pesquisa.

Também usamos o hook useNavigate do React Router DOM para obter a função navigate, que será usada para navegar para a página de resultados da pesquisa.
 
Sim, o useNavigate do React Router DOM nos fornece a função navigate, que é usada para navegar para a página de resultados da pesquisa.

Dentro do componente MovieSearch, a função navigate é obtida usando o useNavigate e armazenada na constante navigate.

Em seguida, temos a função goToSearch, que é definida usando o useCallback. Essa função é chamada quando o botão "Search" é clicado.

Dentro da função goToSearch, verificamos se a palavra-chave (armazenada no estado keyword) tem um comprimento maior que zero. Se a condição for verdadeira, chamamos a função navigate passando a rota desejada como argumento.

A rota é construída usando a categoria de filmes das props, a palavra-chave e o caminho específico para a página de pesquisa. A função navigate então direciona o usuário para a página de resultados de pesquisa correspondente.

Resumindo, o uso do useNavigate e da função navigate permite que o usuário navegue para a página de resultados da pesquisa quando o botão "Search" é clicado, levando em consideração a categoria de filmes e a palavra-chave fornecida.
*/
