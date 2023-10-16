import React, { useRef, useEffect } from 'react';

import { Link, NavLink, useLocation } from 'react-router-dom';

import './header.scss';

import logo from '../../assets/tmovie.png';

const headerNav = [
	{
		display: 'Home',
		path: '/',
	},
	{
		display: 'Movies',
		path: '/movie',
	},
	{
		display: 'TV Series',
		path: '/tv',
	},
	{
		display: 'Blog',
		path: '/blog',
	},
	{
		display: 'Contact Us',
		path: '/contactus',
	},
];

const Header = () => {
	const { pathname } = useLocation();
	const headerRef = useRef(null);

	const active = headerNav.findIndex(e => e.path === pathname);

	useEffect(() => {
		const shrinkHeader = () => {
			if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
				headerRef.current.classList.add('shrink');
			} else {
				headerRef.current.classList.remove('shrink');
			}
		};
		window.addEventListener('scroll', shrinkHeader);
		return () => {
			window.removeEventListener('scroll', shrinkHeader);
		};
	}, []);

	return (
		<div ref={headerRef} className='header'>
			<div className='header__wrap container'>
				<div className='logo'>
					<img src={logo} alt='' />
					<Link to='/'>Mr. Trailer</Link>
				</div>
				<ul className='header__nav'>
					{headerNav.map((item, index) => {
						const isActive = index === active;
						const className = isActive ? 'active' : '';
						return (
							<li key={index} className={className}>
								<NavLink to={item.path}>{item.display}</NavLink>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Header;

// O documento Header.jsx é um componente React responsável por renderizar o cabeçalho do projeto. Aqui está uma explicação do código passo a passo:

// O código importa a biblioteca React.

// O código importa os componentes Link, NavLink e useLocation do pacote react-router-dom. Esses componentes são usados para criar links navegáveis e obter a localização atual da página.

// O código importa o arquivo header.scss, que contém estilos CSS específicos para o cabeçalho do projeto.

// O código importa a imagem do logotipo do projeto.

// O código define um array chamado headerNav que contém objetos representando os itens de navegação do cabeçalho. Cada objeto contém uma propriedade display que representa o texto a ser exibido e uma propriedade path que representa o caminho para o qual o link deve redirecionar.

// O componente Header é definido como uma função sem argumentos. O componente retorna o JSX do cabeçalho com base nas informações fornecidas.

// O cabeçalho é definido como um elemento <div> com uma classe CSS header. O atributo ref é usado para criar uma referência ao elemento <div> usando o hook useRef. Essa referência é usada posteriormente para adicionar e remover uma classe CSS shrink ao cabeçalho com base no deslocamento da página.

// Dentro do <div> do cabeçalho, existem elementos adicionais para o conteúdo do cabeçalho. A classe CSS header__wrap é atribuída ao primeiro <div>, e a classe CSS container é adicionada para limitar o conteúdo dentro de uma largura específica.

// Dentro do <div> do conteúdo do cabeçalho, há uma <div> para o logotipo. A classe CSS logo é atribuída a essa <div>. O logotipo é renderizado como uma imagem usando a imagem importada, e um elemento <Link> é usado para criar um link para a página inicial.

// Posteriormente, há uma lista não ordenada (<ul>) para a navegação do cabeçalho. A classe CSS header__nav é atribuída a essa lista. Dentro dessa lista, o array headerNav é mapeado e para cada item, um elemento <li> é criado. O componente NavLink é usado para criar links navegáveis com base no caminho e no texto fornecidos pelo objeto do array headerNav. A classe CSS active é adicionada ao elemento <li> com base no índice ativo, que é calculado usando a função findIndex.

// Finalmente, o componente Header é exportado como padrão, para que possa ser importado e usado em outros componentes do projeto.

// Resumidamente, o documento Header.jsx define um componente React que renderiza o cabeçalho do projeto. O componente usa o pacote react-router-dom para criar links navegáveis e obter a localização atual da página. O cabeçalho contém um logotipo e uma lista de itens de navegação que redirecionam para diferentes páginas do projeto.
