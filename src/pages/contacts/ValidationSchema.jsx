import * as yup from 'yup';

const signupSchema = yup.object().shape({
	firstName: yup.string().required('First name is required'),
	lastName: yup.string().required('Last name is required'),
	email: yup.string().email('Insira um e-mail válido').required('E-mail is required'),
	age: yup
		.number()
		.typeError('Your age must be a valid number!')
		.min(18, 'You must be of legal age!')
		.max(65, 'You are retired, get off the computer and enjoy life!!!')
		.positive()
		.integer()
		.required('Age is required'),
	subject: yup.string().required('Choose your best subject'),
	message: yup.string().min(10, "Don't be lazy, explain your idea properly!").max(100, "I've fallen asleep waiting for you!").required('Your message is required'),
	/* password: yup.string().min(4, 'A senha deve ter pelo menos 4 caracteres').max(15, 'A senha deve ter no máximo 15 caracteres').required('A senha é obrigatória'),
	confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem corresponder'), */
});

export default signupSchema;

/* Aqui está uma explicação linha por linha do respetivo código:

import * as yup from 'yup';: Importa o pacote yup, que é uma biblioteca de validação de esquemas JavaScript.

const signupSchema = yup.object().shape({ ... });: Cria um esquema de validação utilizando o método yup.object().shape(). O esquema de validação é definido como um objeto com propriedades que correspondem aos campos do formulário a serem validados.

5-14. Para cada campo do formulário, são definidas as regras de validação usando os métodos do yup. Por exemplo, yup.string().required('First name is required') define que o campo firstName deve ser uma string e é obrigatório, caso contrário, exibe a mensagem de erro "First name is required". As regras de validação incluem validação de tipo, tamanho, presença, entre outros.

export default signupSchema;: Exporta o esquema de validação signupSchema como o valor padrão do módulo.
O arquivo ValidationSchema.jsx define as regras de validação para cada campo do formulário de contato. Ele utiliza a biblioteca yup para criar um esquema de validação e define as regras específicas para cada campo, como obrigatoriedade, formato, tamanho, entre outros. O esquema de validação é exportado e utilizado no componente ContactUs para validar os dados inseridos pelo usuário antes de enviar o formulário. */
