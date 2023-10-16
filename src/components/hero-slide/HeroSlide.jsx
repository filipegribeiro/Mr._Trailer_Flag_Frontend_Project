import React, { useState, useEffect, useRef } from 'react';

import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '../button/Button';
import OutlineButton from '../button/OutlineButton';

import Modal, { ModalContent } from '../modal/Modal';

import tmdbApi, { category, movieType } from '../../api/tmdbApi';

import apiConfig from '../../api/apiConfig';

import './hero-slide.scss';

import { useNavigate } from 'react-router';

const HeroSlide = () => {
	SwiperCore.use([Autoplay]);

	const [movieItems, setMovieItems] = useState([]);

	useEffect(() => {
		const getMovies = async () => {
			const params = { page: 1 };

			try {
				const response = await tmdbApi.getMoviesList(movieType.popular, { params });
				setMovieItems(response.results.slice(1, 4));
				console.log(response);
			} catch {
				console.log('error');
			}
		};

		getMovies();
	}, []);

	return (
		<div className='hero-slide'>
			<Swiper
				modules={[Autoplay]}
				grabCursor={true}
				spaceBetween={0}
				slidesPerView={1}
				// autoplay={{delay: 3000}}
			>
				{movieItems.map((item, i) => (
					<SwiperSlide key={i}>{({ isActive }) => <HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`} />}</SwiperSlide>
				))}
			</Swiper>

			{movieItems.map((item, i) => (
				<TrailerModal key={i} item={item} />
			))}
		</div>
	);
};

const HeroSlideItem = props => {
	let history = useNavigate();

	const item = props.item;

	const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

	const setModalActive = async () => {
		const modal = document.querySelector(`#modal_${item.id}`);

		const videos = await tmdbApi.getVideos(category.movie, item.id);

		if (videos.results.length > 0) {
			const videSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;

			modal.querySelector('.modal__content > iframe').setAttribute('src', videSrc);
		} else {
			modal.querySelector('.modal__content').innerHTML = 'No trailer';
		}

		modal.classList.toggle('active');
	};

	return (
		<div className={`hero-slide__item ${props.className}`} style={{ backgroundImage: `url(${background})` }}>
			<div className='hero-slide__item__content container'>
				<div className='hero-slide__item__content__info'>
					<h2 className='title'>{item.title}</h2>

					<div className='overview'>{item.overview}</div>

					<div className='btns'>
						<Button onClick={() => history('/movie/' + item.id)}>Watch now</Button>

						<OutlineButton onClick={setModalActive}>Watch trailer</OutlineButton>
					</div>
				</div>

				<div className='hero-slide__item__content__poster'>
					<img src={apiConfig.w500Image(item.poster_path)} alt='' />
				</div>
			</div>
		</div>
	);
};

const TrailerModal = props => {
	const item = props.item;

	const iframeRef = useRef(null);

	const onClose = () => iframeRef.current.setAttribute('src', '');

	return (
		<Modal active={false} id={`modal_${item.id}`}>
			<ModalContent onClose={onClose}>
				<iframe ref={iframeRef} width='100%' height='500px' title='trailer'></iframe>
			</ModalContent>
		</Modal>
	);
};

export default HeroSlide;

// O documento HeroSlide.jsx é um componente React que faz parte do projeto. Ele é responsável por renderizar um slide na interface do usuário.

// Aqui está uma explicação básica do código:

// O código importa várias bibliotecas e componentes necessários, como React, Swiper, Button, Modal, etc.

// O componente HeroSlide é definido como uma função sem argumentos. Ele usa os hooks useState, useEffect e useNavigate do React.

// O componente HeroSlide possui um estado movieItems que é inicializado com um array vazio usando o hook useState.

// O hook useEffect é usado para buscar filmes populares do serviço TMDB e atualizar o estado movieItems com os resultados.

// O componente HeroSlide retorna um JSX que contém o componente Swiper do pacote Swiper, que é um carrossel de slides.

// Dentro do Swiper, o componente SwiperSlide é usado para renderizar cada slide do carrossel. O componente HeroSlideItem é usado como o conteúdo de cada slide.

// Além disso, o componente TrailerModal é renderizado para cada item de filme no estado movieItems.

// O componente HeroSlideItem é definido como uma função que recebe as propriedades item e className. Ele renderiza o conteúdo de cada slide do carrossel, incluindo o título, descrição, botões e imagem do filme.

// O componente TrailerModal é definido como uma função que recebe a propriedade item. Ele renderiza um modal que exibe o trailer do filme quando o botão "Watch trailer" é clicado.

// Finalmente, o componente HeroSlide e o componente HeroSlideItem são exportados como padrão para que possam ser usados em outros componentes do projeto.

// Resumidamente, o documento HeroSlide.jsx é responsável por renderizar um slide na interface do usuário do projeto. Ele busca filmes populares, exibe informações sobre os filmes e permite assistir ao trailer dos filmes.
