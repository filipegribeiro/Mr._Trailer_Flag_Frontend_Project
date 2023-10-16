import React from 'react';

import './input.scss';

const Input = props => {
	return <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange ? e => props.onChange(e) : null} />;
};

export default Input;

// O documento Input.jsx é um componente React que faz parte do projeto. Ele é responsável por renderizar um elemento <input> na interface do usuário.

// Aqui está uma explicação básica do código:

// O código importa a biblioteca React.

// O componente Input é definido como uma função que recebe as propriedades type, placeholder, value e onChange.

// O componente retorna um JSX que representa um elemento <input>. O type do input é definido com base na propriedade type recebida. O placeholder é definido com base na propriedade placeholder recebida. O value é definido com base na propriedade value recebida. E o onChange é definido com base na propriedade onChange recebida, caso ela exista.

// A função onChange é definida como uma função anônima que recebe um evento e chama a função onChange fornecida como propriedade, passando o evento como argumento. Se a propriedade onChange não for fornecida, a função onChange será definida como null.

// Por fim, o componente Input é exportado como padrão para que possa ser usado em outros componentes do projeto.

// Resumidamente, o documento Input.jsx é responsável por renderizar um elemento <input> na interface do usuário do projeto. Ele permite que o usuário insira dados em um campo de entrada.
