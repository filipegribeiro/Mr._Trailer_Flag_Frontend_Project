import { useState } from 'react';
import { useFormik } from 'formik';
import signupSchema from './ValidationSchema';

import '../contacts/contactUs.scss';

const ContactsUs = () => {
	const [formData, setFormData] = useState(null);

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			age: '',
			password: '',
			confirmPassword: '',
		},
		validationSchema: signupSchema,
		onSubmit: values => {
			console.log(values);
			setFormData(values);
			formik.resetForm();
		},
	});

	return (
		<div className='contactus'>
			<div className='container'>
				<div className='title'>We're here for you...</div>

				<form onSubmit={formik.handleSubmit}>
					<input type='text' name='firstName' placeholder='First Name' {...formik.getFieldProps('firstName')} />
					<p>{formik.errors.firstName}</p>

					<input type='text' name='lastName' placeholder='Last Name' {...formik.getFieldProps('lastName')} />
					<p>{formik.errors.lastName}</p>

					<input type='text' name='email' placeholder='Email' {...formik.getFieldProps('email')} />
					<p>{formik.errors.email}</p>

					<input type='text' name='age' placeholder='Age' {...formik.getFieldProps('age')} />
					<p>{formik.errors.age}</p>

					<label className='subject' htmlFor='subject'>
						Subject:
					</label>
					<input type='text' id='subject' name='subject' placeholder='Your subject' {...formik.getFieldProps('subject')} />
					<p>{formik.errors.subject}</p>

					<label className='message' htmlFor='message'>
						Message:
					</label>
					<textarea id='message' name='message' placeholder='Type your message..' {...formik.getFieldProps('message')}></textarea>
					<p>{formik.errors.message}</p>

					<input className='btn_submit' type='submit' id='submit' />
				</form>

				{formData && (
					<div className='submittedData'>
						{/* <h2>Dados Enviados:</h2>
						<pre>{JSON.stringify(formData, null, 2)}</pre> */}
						<p>Obrigado pelo seu contacto</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default ContactsUs;

/* Aqui está uma explicação linha por linha do respetivo código:
	
import { useState } from 'react';: Importa o hook useState da biblioteca React. Ele é usado para criar e gerenciar estados dentro do componente funcional.

import { useFormik } from 'formik';: Importa a função useFormik da biblioteca Formik. Ela é usada para gerenciar os valores do formulário, validação e manipulação de eventos.

import signupSchema from './ValidationSchema';: Importa um objeto que representa o esquema de validação do formulário. É um arquivo externo chamado ValidationSchema.js que contém as regras de validação para cada campo do formulário.

import '../contacts/contactUs.scss';: Importa o arquivo de estilo contactUs.scss que contém os estilos específicos para o componente ContactUs.

const ContactsUs = () => {: Define um componente funcional chamado ContactUs.

const [formData, setFormData] = useState(null);: Cria um estado chamado formData usando o hook useState. O valor inicial do estado é null e a função setFormData é usada para atualizar o valor do estado.

const formik = useFormik({ ... });: Cria uma instância do useFormik para gerenciar o formulário. Dentro do objeto passado como argumento, são definidas as propriedades initialValues com os valores iniciais dos campos do formulário, validationSchema com o esquema de validação do formulário e onSubmit com a função que será executada quando o formulário for submetido.

14-30. No bloco de retorno, são renderizados os elementos HTML que compõem o formulário de contato. Cada campo do formulário é representado por um elemento <input> ou <textarea>. O hook formik.getFieldProps é usado para obter as props necessárias para cada campo do formulário, como name, placeholder e value. Também são renderizados elementos <p> para exibir mensagens de erro de validação para cada campo.

<input type='submit' id='submit' />: Renderiza um botão de envio do formulário.
35-48. Nesse bloco condicional, é verificado se formData é diferente de null. Se for verdadeiro, é renderizado um elemento <div> com a classe submittedData que exibe uma mensagem de agradecimento pelo contato.

export default ContactsUs;: Exporta o componente ContactUs como o valor padrão do módulo.
O componente ContactUs representa um formulário de contato. Ele utiliza os hooks useState e useFormik para gerenciar o estado do formulário, validação e manipulação de eventos. O arquivo também importa um esquema de validação externo e estilos específicos. No geral, o componente é responsável por renderizar e gerenciar o formulário de contato, exibindo mensagens de erro de validação e uma mensagem de agradecimento quando o formulário é enviado com sucesso. */
