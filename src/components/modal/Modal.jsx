import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

import './modal.scss';

const Modal = props => {
	const [active, setActive] = useState(false);

	useEffect(() => {
		setActive(props.active);
	}, [props.active]);

	return (
		<div id={props.id} className={`modal ${active ? 'active' : ''}`}>
			{' '}
			{props.children}
		</div>
	);
};

Modal.propTypes = {
	active: PropTypes.bool,
	id: PropTypes.string,
};

export const ModalContent = props => {
	const contentRef = useRef(null);

	const closeModal = () => {
		contentRef.current.parentNode.classList.remove('active');
		if (props.onClose) props.onClose();
	};

	return (
		<div ref={contentRef} className='modal__content'>
			{props.children}
			<div className='modal__content' onClick={closeModal}>
				<i className='bx bx-x'></i>
			</div>
		</div>
	);
};

ModalContent.propTypes = {
	onClose: PropTypes.func,
};

export default Modal;

// O documento Modal.jsx é um componente React que faz parte do projeto. Ele é responsável por renderizar um modal na interface do usuário.

// Aqui está uma explicação básica do código:

// O código importa a biblioteca React. Ele também importa a biblioteca PropTypes para definir as propriedades esperadas pelo componente.

// O componente Modal é definido como uma função que recebe as propriedades active e id.

// O componente Modal usa o hook useState para definir o estado active e o hook useEffect para atualizar o estado active com base na propriedade active recebida.

// O componente retorna um JSX que representa o modal. O id do modal é definido com base na propriedade id recebida. A classe active é adicionada ao modal se o estado active for verdadeiro.

// Dentro do modal, é renderizado o conteúdo do modal usando a propriedade children, que representa o conteúdo passado entre as tags de abertura e fechamento do componente Modal.

// O componente Modal também define as propriedades esperadas usando PropTypes.

// O componente ModalContent é definido como uma função que recebe as propriedades onClose. Ele renderiza o conteúdo interno do modal, incluindo o botão de fechar.

// O componente ModalContent usa o hook useRef para criar uma referência ao elemento de conteúdo do modal.

// O componente ModalContent define a função closeModal que remove a classe active do elemento de conteúdo do modal e chama a função onClose, se fornecida.

// O componente ModalContent retorna um JSX que representa o conteúdo interno do modal, incluindo o botão de fechar.

// O componente ModalContent também define as propriedades esperadas usando PropTypes.

// Finalmente, o componente Modal e o componente ModalContent são exportados como padrão para que possam ser usados em outros componentes do projeto.

// Resumidamente, o documento Modal.jsx é responsável por renderizar um modal na interface do usuário do projeto. Ele permite exibir conteúdo em uma sobreposição na tela e possui um botão de fechar.
