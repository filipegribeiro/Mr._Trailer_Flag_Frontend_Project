import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const Footer = () => {
	return (
		<div className='footer' style={{ backgroundImage: `url(${bg})` }}>
			<div className='footer__content container'>
				<div className='footer__content__logo'>
					<div className='logo'>
						<img src={logo} alt='' />
						<Link to='/'>Mr. Trailer</Link>
					</div>
				</div>
				<div className='footer__content__menus'>
					<div className='footer__content__menu'>
						<Link to='/'>Home</Link>
						<Link to='/'>Contact us</Link>
						<Link to='/'>Term of services</Link>
						<Link to='/'>About us</Link>
					</div>
					<div className='footer__content__menu'>
						<Link to='/'>Live</Link>
						<Link to='/'>FAQ</Link>
						<Link to='/'>Premium</Link>
						<Link to='/'>Privacy policy</Link>
					</div>
					<div className='footer__content__menu'>
						<Link to='/'>You must watch</Link>
						<Link to='/'>Recent release</Link>
						<Link to='/'>Top IMDB</Link>
						<Link to='/'>Cookies</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

// O documento Footer.jsx é um componente React responsável por renderizar o rodapé do projeto. Aqui está uma explicação do código passo a passo:

// O código importa a biblioteca React.

// O código importa o arquivo footer.scss, que contém estilos CSS específicos para o rodapé do projeto.

// O código importa o componente Link do pacote react-router-dom. Esse componente é usado para criar links navegáveis no projeto.

// O código importa duas imagens: bg e logo. Essas imagens são usadas como plano de fundo do rodapé (bg) e como logotipo (logo).

// O componente Footer é definido como uma função sem argumentos. O componente retorna o JSX do rodapé com base nas informações fornecidas.

// O JSX do rodapé é definido como um elemento <div>. A classe CSS footer é atribuída à <div>, e um estilo de plano de fundo é aplicado usando a propriedade style e a imagem bg.

// Dentro do <div> do rodapé, existem elementos <div> adicionais para o conteúdo do rodapé. A classe CSS footer__content é atribuída ao primeiro <div>, e a classe CSS container é adicionada para limitar o conteúdo dentro de uma largura específica.

// Dentro do <div> do conteúdo do rodapé, há um <div> adicional para o logotipo. A classe CSS footer__content__logo é atribuída a esse <div>. O logotipo é renderizado como uma imagem usando a imagem logo, e um elemento <Link> é usado para criar um link para a página inicial.

// Em seguida, há um <div> para os menus do rodapé. A classe CSS footer__content__menus é atribuída a esse <div>. Dentro desse <div>, existem três <div> adicionais para cada menu do rodapé. Cada menu contém vários elementos <Link>, que são usados para criar links para diferentes páginas do projeto.

// Por último, o componente Footer é exportado como padrão, para que possa ser importado e usado em outros componentes do projeto.

// Resumidamente, o documento Footer.jsx define um componente React que renderiza o rodapé do projeto. O componente usa imagens, estilos CSS e o pacote react-router-dom para criar um rodapé com logotipo e menus navegáveis. O rodapé fornece links para várias páginas do projeto, como a página inicial, contato, termos de serviço e muito mais.
