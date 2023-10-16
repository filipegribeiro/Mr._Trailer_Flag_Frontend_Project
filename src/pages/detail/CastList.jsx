import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const CastList = props => {
	const { category } = useParams();

	const [casts, setCasts] = useState([]);

	useEffect(() => {
		const getCredits = async () => {
			const res = await tmdbApi.credits(category, props.id);
			setCasts(res.cast.slice(0, 5));
		};
		getCredits();
	}, [category, props.id]);

	return (
		<div className='casts'>
			{casts.map((item, i) => (
				<div key={i} className='casts__item'>
					<div className='casts__item__img' style={{ backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})` }}></div>
					<p className='casts__item__name'>{item.name}</p>
				</div>
			))}
		</div>
	);
};

export default CastList;

/* Aqui está uma explicação linha por linha do respetivo código:

import React, { useState, useEffect } from 'react';: Importa o pacote react, bem como os hooks useState e useEffect da biblioteca React. Esses hooks são usados para gerenciar estado e efeitos colaterais no componente funcional.

import { useParams } from 'react-router';: Importa o hook useParams da biblioteca react-router. Esse hook permite acessar os parâmetros da URL.

import tmdbApi from '../../api/tmdbApi';: Importa um módulo chamado tmdbApi que contém funções para fazer chamadas à API TMDB.

import apiConfig from '../../api/apiConfig';: Importa um módulo chamado apiConfig que contém informações de configuração para a API TMDB.

const CastList = props => {: Define um componente funcional chamado CastList que recebe as propriedades props.

const { category } = useParams();: Utiliza o hook useParams para obter o parâmetro category da URL.

const [casts, setCasts] = useState([]);: Cria um estado chamado casts usando o hook useState. O valor inicial do estado é um array vazio [] e a função setCasts é usada para atualizar o valor do estado.

15-23. Utiliza o hook useEffect para executar um efeito colateral sempre que as dependências [category, props.id] mudarem. Dentro do efeito, é definida uma função assíncrona getCredits que faz uma chamada à função tmdbApi.credits passando o parâmetro category e props.id. Em seguida, o resultado da chamada é atribuído ao estado casts usando a função setCasts, limitando a exibição dos primeiros 5 itens do elenco.

No bloco de retorno, é renderizado um elemento <div> com a classe casts. Dentro desse elemento, é mapeado o array casts e para cada item é renderizado um elemento <div> com a classe casts__item. Esse elemento contém um elemento <div> com a classe casts__item__img que exibe a imagem do ator/atrizes usando a propriedade profile_path do item e um elemento <p> com a classe casts__item__name que exibe o nome do ator/atrizes usando a propriedade name do item.

export default CastList;: Exporta o componente CastList como o valor padrão do módulo.

O componente CastList é responsável por exibir uma lista de elenco de um determinado filme ou série. Ele utiliza os hooks useParams e useEffect para obter parâmetros da URL e fazer chamadas à API TMDB para obter os dados do elenco. O componente renderiza os itens do elenco, exibindo a imagem e o nome de cada ator/atrizes. A quantidade de itens exibidos é limitada aos primeiros 5 do elenco. */
