import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = props => {
	return (
		<button className={`btn ${props.className}`} onClick={props.onClick ? () => props.onClick() : null}>
			{props.children}
		</button>
	);
};

Button.propTypes = {
	onClick: PropTypes.func,
};

export default Button;

// O documento Button.jsx é um componente React responsável por renderizar um botão personalizado no projeto. Aqui está uma explicação do código passo a passo:

// O código importa as bibliotecas React e PropTypes. React é necessário para criar componentes React, e PropTypes é usado para definir os tipos esperados das propriedades do componente.

// O código importa o arquivo button.scss, que contém estilos CSS específicos para o componente Button. Esses estilos serão aplicados ao botão renderizado.

// O componente Button é definido como uma função que recebe props como argumento. O componente retorna o JSX do botão com base nas propriedades fornecidas.

// O JSX do botão é definido como um elemento <button>. A classe CSS btn é atribuída ao botão, e a classe CSS especificada em props.className também é adicionada. Isso permite que estilos personalizados sejam aplicados ao botão com base nas propriedades fornecidas.

// A propriedade onClick é verificada para determinar se uma função de clique foi fornecida. Se sim, um manipulador de eventos de clique é atribuído ao botão usando a sintaxe onClick={() => props.onClick()}. Caso contrário, nenhum manipulador de eventos de clique é atribuído.

// O conteúdo do botão é renderizado usando a propriedade props.children. Isso permite que qualquer conteúdo seja passado como filho para o componente Button.

// O componente Button define a propriedade onClick como um PropTypes.func, o que significa que ele espera uma função como valor. Isso é útil para validar as propriedades fornecidas ao componente e evitar erros de tipo.

// Por fim, o componente Button é exportado como padrão, para que possa ser importado e usado em outros componentes do projeto.

// Resumidamente, o documento Button.jsx define um componente React que renderiza um botão personalizado. O componente aceita propriedades como className e onClick, permitindo que estilos e manipuladores de eventos personalizados sejam passados para o botão. O documento também usa o pacote PropTypes para validar as propriedades do componente.
