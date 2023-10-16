import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';
import Button from './Button';

const OutlineButton = props => {
	return (
		<Button className={`btn-outline ${props.className}`} onClick={props.onClick ? () => props.onClick() : null}>
			{props.children}
		</Button>
	);
};

OutlineButton.propTypes = {
	onClick: PropTypes.func,
};

export default OutlineButton;

// O documento OutlineButton.jsx é um componente React que representa um botão de contorno personalizado no projeto. Ele é uma extensão do componente Button. Vejamos aqui uma explicação do código passo a passo:

// O código importa as bibliotecas React e PropTypes, assim como no documento Button.jsx.

// O código importa o arquivo button.scss, que contém estilos CSS específicos para os botões do projeto.

// O código importa o componente Button do arquivo Button.jsx. Essa importação permite que o componente OutlineButton seja construído com base no componente Button.

// O componente OutlineButton é definido como uma função que recebe props como argumento. O componente retorna o JSX do botão de contorno com base nas propriedades fornecidas.

// O JSX do botão de contorno é definido como um elemento <Button>, que é o componente importado do arquivo Button.jsx. A classe CSS btn-outline é adicionada à classe CSS especificada em props.className, permitindo que estilos de contorno sejam aplicados ao botão.

// A propriedade onClick é verificada para determinar se uma função de clique foi fornecida. Se sim, um manipulador de eventos de clique é atribuído ao botão usando a sintaxe onClick={() => props.onClick()}. Caso contrário, nenhum manipulador de eventos de clique é atribuído.

// O conteúdo do botão de contorno é renderizado usando a propriedade props.children, assim como no componente Button.

// O componente OutlineButton define a propriedade onClick como um PropTypes.func, assim como no componente Button.

// Por fim, o componente OutlineButton é exportado como padrão, assim como no componente Button.

// Resumidamente, o documento OutlineButton.jsx define um componente React que representa um botão de contorno personalizado. Ele estende o componente Button e adiciona estilos de contorno ao botão. O componente pode ser usado para criar botões com estilos de contorno em diferentes partes do projeto.
