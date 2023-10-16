import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Pagination from './components/Pagination';

import './blog.scss';

const Home = () => {
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState(null);

	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(4);

	const paginate = pageNumber => setCurrentPage(pageNumber);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await fetch('http://localhost:5000/posts');

				if (!response.ok) {
					throw new Error('Network response foi com os porcos :(');
				}

				const data = await response.json();
				const sortedData = data.sort((a, b) => b.id - a.id); // Ordena os posts por ID de maneira decrescente
				setPosts(sortedData);
			} catch (error) {
				setError(error);
			}
		};

		fetchPosts();
	}, []);

	const currentPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage); // mandar fora

	return (
		<section id='blog' className='blog'>
			<div className='container'>
				<div className='blog__wrapper'>
					<div className='blog__header'>
						<h2>Just keep posting...{/* <Link to={`/create`}> posting...</Link> */}</h2>
					</div>
					<div className='blog__posts'>
						{error && <h4>{error.message}</h4>}

						{currentPosts.map(post => (
							<article className='blog__post' key={post.id}>
								<h3>
									{post.id} - {post.title}
								</h3>
								<p>{post.body}</p>
								<p className='blog__post__author'>{post.author}</p>
								<div className='blog__post__btn'>
									<Link to={`/update/${post.id}`} className='blog__btn update'>
										Update
									</Link>
									<Link to={`/delete/${post.id}`} className='blog__btn delete'>
										Delete
									</Link>
								</div>
							</article>
						))}
					</div>
					<div className='container'>
						<Pagination totalPosts={posts.length} postsPerPage={postsPerPage} currentPage={currentPage} paginate={paginate} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;

/* O arquivo Blog.jsx é um componente React que representa a página inicial do blog no projeto. Ele é responsável por exibir uma lista de posts, permitindo a visualização, atualização e exclusão de cada post.

Aqui está uma explicação linha por linha do código:

import { Link } from 'react-router-dom';: Importa o componente Link do pacote react-router-dom, que é usado para criar links para outras rotas dentro do aplicativo.

import { useState, useEffect } from 'react';: Importa os hooks useState e useEffect do pacote react, que são utilizados para gerenciar estados e executar efeitos colaterais.

import Pagination from './components/Pagination';: Importa o componente Pagination do arquivo ./components/Pagination.js, que é usado para implementar a paginação dos posts.

import './blog.scss';: Importa o arquivo de estilo blog.scss, que contém estilos específicos para esta página.

const Home = () => { ... }: Define um componente funcional chamado Home.

const [posts, setPosts] = useState([]);: Declara uma variável de estado posts que armazenará a lista de posts e uma função setPosts para atualizá-la. O estado inicial é um array vazio.

const [error, setError] = useState(null);: Declara uma variável de estado error que armazenará um objeto de erro e uma função setError para atualizá-lo. O estado inicial é null.

const [currentPage, setCurrentPage] = useState(1);: Declara uma variável de estado currentPage que armazenará o número da página atual e uma função setCurrentPage para atualizá-lo. O estado inicial é 1.

const [postsPerPage] = useState(4);: Declara uma variável de estado postsPerPage que armazenará o número de posts exibidos por página. O estado inicial é 4.

const paginate = pageNumber => setCurrentPage(pageNumber);: Define uma função chamada paginate que recebe o número da página como argumento e atualiza o estado currentPage com esse valor.

useEffect(() => { ... }, []);: Utiliza o hook useEffect para executar um efeito colateral. A função passada como primeiro argumento será executada após a renderização inicial do componente e sempre que o array de dependências (segundo argumento) mudar. Quando o array de dependências está vazio ([]), o efeito será executado apenas uma vez, após a renderização inicial do componente.

const fetchPosts = async () => { ... };: Define uma função assíncrona chamada fetchPosts que é responsável por obter os posts da API. Ela utiliza a função fetch para fazer uma solicitação GET para a URL http://localhost:5000/posts. Se a resposta não for bem-sucedida, um erro é lançado. Caso contrário, os dados são convertidos para JSON e armazenados na constante data. Os posts são ordenados pelo ID de forma decrescente e, em seguida, atualizados no estado posts por meio da função setPosts. Se ocorrer algum erro durante o processo, ele é capturado e armazenado no estado error por meio da função setError.

fetchPosts();: Chama a função fetchPosts para buscar os posts da API assim que o componente é montado.

const currentPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);: Calcula os posts que devem ser exibidos na página atual com base no estado currentPage e postsPerPage. A função slice é usada para extrair uma porção do array posts, começando do índice (currentPage - 1) * postsPerPage e indo até o índice currentPage * postsPerPage.

<section id='blog' className='blog'>: Inicia uma seção com o ID "blog" e a classe "blog". Isso é usado para aplicar estilos e identificar a seção no código.

<div className='container'>: Cria um container para agrupar os elementos internos.

<div className='blog__wrapper'>: Cria uma div com a classe "blog__wrapper". Isso é usado para envolver os elementos internos da seção do blog.

<div className='blog__header'>: Cria uma div com a classe "blog__header". Isso é usado para exibir o cabeçalho da seção do blog. */

/*< h2 > Just keep posting...{/* <Link to={/create}> posting...</Link> */ // }</ >: Exibe um título "Just keep posting..." no cabeçalho da seção.O comentário dentro do elemento HTML é uma sugestão para adicionar um link para a página de criação de post, mas está atualmente comentado.

/* <div className='blog__posts'>: Cria uma div com a classe "blog__posts". Isso é usado para exibir a lista de posts.

{error && <h4>{error.message}</h4>}: Renderiza um elemento <h4> contendo a mensagem de erro apenas se o estado error for verdadeiro.

{currentPosts.map(post => (...))}: Itera sobre o array currentPosts utilizando o método map para renderizar os elementos do array na interface. Para cada post, é criado um elemento <article> com a classe "blog__post" e um atributo key definido como o ID do post. Dentro do elemento <article>, são exibidos o título, o corpo e o autor do post, bem como os botões "Update" e "Delete" que são links para as rotas de atualização e exclusão do post, respectivamente.

<div className='container'>: Cria um container adicional para envolver o componente de paginação.

<Pagination totalPosts={posts.length} postsPerPage={postsPerPage} currentPage={currentPage} paginate={paginate} />: Renderiza o componente Pagination passando as props totalPosts com o número total de posts, postsPerPage com o número de posts por página, currentPage com a página atual e paginate como função para atualizar a página atual.

export default Home;: Exporta o componente Home como o valor padrão do módulo.

O componente Home representa a página inicial do blog. Ele utiliza os hooks useState e useEffect para gerenciar o estado dos posts, a página atual e possíveis erros. A função fetchPosts é usada dentro do useEffect para obter os posts da API e atualizar o estado posts. A constante currentPosts é calculada com base na página atual e no número de posts por página. O componente renderiza os elementos HTML correspondentes aos posts, exibindo o título, o corpo e o autor de cada post, bem como os botões "Update" e "Delete" para cada post. Além disso, o componente renderiza a seção de paginação que permite ao usuário navegar entre as diferentes páginas de posts. O arquivo também importa estilos específicos para a página inicial do blog a partir do arquivo de estilo blog.scss. No geral, o componente Home descreve a estrutura e o comportamento da página inicial do blog, exibindo os posts e permitindo interações com eles. */
