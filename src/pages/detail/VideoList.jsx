import React, { useState, useEffect, useRef } from 'react';

import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';

const VideoList = props => {
	const { category } = useParams();

	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const getVideos = async () => {
			const res = await tmdbApi.getVideos(category, props.id);
			setVideos(res.results.slice(0, 5));
		};
		getVideos();
	}, [category, props.id]);

	return (
		<>
			{videos.map((item, i) => (
				<Video key={i} item={item} />
			))}
		</>
	);
};

const Video = props => {
	const item = props.item;

	const iframeRef = useRef(null);

	useEffect(() => {
		const height = (iframeRef.current.offsetWidth * 9) / 16 + 'px';
		iframeRef.current.setAttribute('height', height);
	}, []);

	return (
		<div className='video'>
			<div className='video__title'>
				<h2>{item.name}</h2>
			</div>
			<iframe src={`https://www.youtube.com/embed/${item.key}`} ref={iframeRef} width='100%' title='video'></iframe>
		</div>
	);
};

export default VideoList;

/* Aqui está uma explicação linha por linha do respetivo código:

import React, { useState, useEffect, useRef } from 'react';: Importa o pacote react, bem como os hooks useState, useEffect e useRef da biblioteca React. Esses hooks são usados para gerenciar estado, efeitos colaterais e referências no componente funcional.

import { useParams } from 'react-router';: Importa o hook useParams da biblioteca react-router. Esse hook permite acessar os parâmetros da URL.

import tmdbApi from '../../api/tmdbApi';: Importa um módulo chamado tmdbApi que contém funções para fazer chamadas à API TMDB.

const VideoList = props => {: Define um componente funcional chamado VideoList que recebe as propriedades como argumento.

const { category } = useParams();: Utiliza o hook useParams para obter o parâmetro category da URL.

const [videos, setVideos] = useState([]);: Cria um estado chamado videos usando o hook useState. O valor inicial do estado é um array vazio e a função setVideos é usada para atualizar o valor do estado.

13-22. Utiliza o hook useEffect para executar um efeito colateral sempre que as dependências [category, props.id] mudarem. Dentro do efeito, é definida uma função assíncrona getVideos que faz uma chamada à função tmdbApi.getVideos passando os parâmetros category e props.id. Em seguida, o resultado da chamada é atribuído ao estado videos usando a função setVideos, limitado aos primeiros 5 vídeos do resultado.

25-32. Define um componente funcional chamado Video que recebe as propriedades como argumento.

34-42. Utiliza o hook useEffect para executar um efeito colateral assim que o componente for montado. Dentro do efeito, é calculada a altura do elemento <iframe> com base na largura do elemento e atualizada a altura do elemento usando a propriedade height.

45-54. O bloco de retorno do componente Video renderiza um elemento <div> com a classe video que contém o título do vídeo e o elemento <iframe> que exibe o vídeo do YouTube. O título do vídeo é renderizado em um elemento <h2>. O atributo src do <iframe> é definido com base na propriedade key do item, e o atributo ref é definido com uma referência de iframeRef.

57-59. Exporta o componente VideoList como o valor padrão do módulo.

O componente VideoList é responsável por exibir uma lista de vídeos relacionados a um item, como filmes ou séries. Ele utiliza o hook useParams para obter o parâmetro category da URL e o hook useEffect para fazer uma chamada à API TMDB e obter os vídeos relacionados ao item. O componente renderiza uma lista de componentes Video, passando cada vídeo como propriedade.

O componente Video é responsável por exibir um vídeo do YouTube. Ele utiliza o hook useEffect para calcular e atualizar a altura do elemento <iframe>. O componente renderiza o título do vídeo e o elemento <iframe> que exibe o vídeo do YouTube.

Em resumo, o componente VideoList é responsável por exibir uma lista de vídeos relacionados a um item, como filmes ou séries. Ele utiliza o hook useParams para obter o parâmetro category da URL e o hook useEffect para fazer uma chamada à API TMDB e obter os vídeos relacionados ao item. O componente renderiza uma lista de componentes Video, passando cada vídeo como propriedade.

O componente Video é responsável por exibir um vídeo do YouTube. Ele utiliza o hook useEffect para calcular e atualizar a altura do elemento <iframe>. O componente renderiza o título do vídeo e o elemento <iframe> que exibe o vídeo do YouTube.

No projeto em questão, o componente VideoList é utilizado para exibir uma lista de vídeos relacionados a um item específico, como por exemplo, trailers de filmes ou episódios de uma série. O componente é utilizado em conjunto com as rotas do React Router para obter o parâmetro category da URL e realizar a busca na API TMDB. A partir dos vídeos obtidos, o componente renderiza uma lista de vídeos utilizando o componente Video. */
