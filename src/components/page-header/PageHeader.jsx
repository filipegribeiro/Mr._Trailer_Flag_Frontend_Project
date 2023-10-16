import React from 'react';

import './page-header.scss';

import bg from '../../assets/footer-bg.jpg';

const PageHeader = props => {
	return (
		<div className='page-header' style={{ backgroundImage: `url(${bg})` }}>
			<h2>{props.children}</h2>
		</div>
	);
};

PageHeader.propTypes = {};

export default PageHeader;

/* O documento PageHeader.jsx é um componente React que faz parte do projeto.

Vou explicar o código linha por linha:

import React from 'react';: Importa a biblioteca React para criar componentes React.

import './page-header.scss';: Importa o arquivo de estilo page-header.scss para estilizar o componente.

import bg from '../../assets/footer-bg.jpg';: Importa a imagem de fundo do cabeçalho da página localizada em ../../assets/footer-bg.jpg. Essa imagem será usada como plano de fundo do componente.

const PageHeader = props => {: Define o componente PageHeader como uma função que recebe as propriedades (props).

<div className='page-header' style={{ backgroundImage: url(${bg}) }}>: Renderiza um elemento div com a classe CSS 'page-header' e um estilo inline definido por style. O estilo inline define a imagem de fundo usando a propriedade backgroundImage com o valor url(${bg}), onde bg é a importação da imagem de fundo.

<h2>{props.children}</h2>: Renderiza um elemento h2 com o conteúdo das propriedades children passadas para o componente.

};: Fecha o componente PageHeader.

PageHeader.propTypes = {};: Define as propriedades esperadas pelo componente PageHeader como um objeto vazio. Neste caso, o componente não espera nenhuma propriedade.

export default PageHeader;: Exporta o componente PageHeader para que possa ser importado e utilizado em outros arquivos.

A função do componente PageHeader é renderizar um cabeçalho de página com uma imagem de fundo e um título. O título é passado como conteúdo das propriedades children. O componente não espera outras propriedades além das definidas em PageHeader.propTypes. */
