import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'swiper/css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

// components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Pages
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Detail from './pages/detail/Detail';
import Blog from './pages/blog/Blog';
import ContactUs from './pages/contacts/ContactsUs';

// CRUD imports
import CreatePost from './pages/blog/api/CreatePost';
import UpdatePost from './pages/blog/api/UpdatePost';
import DeletePost from './pages/blog/api/DeletePost';
function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route index element={<Home />} />
				<Route path='/:category/search/' element={<Catalog />} />
				<Route path='/:category/:id' element={<Detail />} />
				<Route path='/:category' element={<Catalog />} />
				<Route path='/create' element={<CreatePost />} />
				<Route path='/update/:id' element={<UpdatePost />} />
				<Route path='/delete/:id' element={<DeletePost />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/contactus' element={<ContactUs />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;

/* Aqui está uma explicação linha por linha do respetivo código:

import { BrowserRouter, Route, Routes } from 'react-router-dom';: Importa os componentes BrowserRouter, Route e Routes da biblioteca react-router-dom. Esses componentes são responsáveis por definir as rotas e gerenciar a navegação no aplicativo.

import 'swiper/css';: Importa o arquivo CSS do pacote swiper. Esse pacote é usado para criar slides e carrosséis no aplicativo.

import './assets/boxicons-2.0.7/css/boxicons.min.css';: Importa o arquivo CSS do pacote boxicons. Esse pacote fornece ícones para o aplicativo.

import './App.scss';: Importa o arquivo de estilos SCSS do componente App.

import Header from './components/header/Header';: Importa o componente Header do arquivo Header.jsx localizado na pasta ./components/header/. Esse componente é responsável por exibir o cabeçalho do aplicativo.

import Footer from './components/footer/Footer';: Importa o componente Footer do arquivo Footer.jsx localizado na pasta ./components/footer/. Esse componente é responsável por exibir o rodapé do aplicativo.

import Home from './pages/Home';: Importa o componente Home do arquivo Home.jsx localizado na pasta ./pages/. Esse componente representa a página inicial do aplicativo.

import Catalog from './pages/Catalog';: Importa o componente Catalog do arquivo Catalog.jsx localizado na pasta ./pages/. Esse componente representa a página de catálogo do aplicativo.

import Detail from './pages/detail/Detail';: Importa o componente Detail do arquivo Detail.jsx localizado na pasta ./pages/detail/. Esse componente representa a página de detalhes de um filme ou série.

import Blog from './pages/blog/Blog';: Importa o componente Blog do arquivo Blog.jsx localizado na pasta ./pages/blog/. Esse componente representa a página de blog do aplicativo.

import ContactUs from './pages/contacts/ContactsUs';: Importa o componente ContactUs do arquivo ContactsUs.jsx localizado na pasta ./pages/contacts/. Esse componente representa a página de contato do aplicativo.

import CreatePost from './pages/blog/api/CreatePost';: Importa o componente CreatePost do arquivo CreatePost.jsx localizado na pasta ./pages/blog/api/. Esse componente representa a página de criação de um post no blog.

import UpdatePost from './pages/blog/api/UpdatePost';: Importa o componente UpdatePost do arquivo UpdatePost.jsx localizado na pasta ./pages/blog/api/. Esse componente representa a página de atualização de um post no blog.

import DeletePost from './pages/blog/api/DeletePost';: Importa o componente DeletePost do arquivo DeletePost.jsx localizado na pasta ./pages/blog/api/. Esse componente representa a página de exclusão de um post no blog.

function App() {: Define um componente funcional chamado App.

O bloco de retorno do componente App envolve todo o conteúdo do aplicativo em um componente BrowserRouter. O BrowserRouter é responsável por fornecer a funcionalidade de roteamento ao aplicativo. Ele garante que as rotas e a navegação funcionem corretamente.

Dentro do componente App, são renderizados três componentes principais:

O componente Header é renderizado antes das rotas e é responsável por exibir o cabeçalho do aplicativo.

O componente Routes é onde as rotas são definidas e renderizadas. Ele contém várias instâncias do componente Route, que são usadas para mapear as URLs às páginas correspondentes do aplicativo.

O componente Footer é renderizado após as rotas e é responsável por exibir o rodapé do aplicativo.

O componente Routes contém várias instâncias do componente Route, cada uma definindo uma rota específica. Cada Route tem uma propriedade path que especifica o padrão da URL a ser correspondido. Quando a URL corresponde a um determinado path, o componente especificado pela propriedade element é renderizado.

Portanto, o componente Routes é responsável por definir e renderizar as diferentes páginas do aplicativo com base nas rotas especificadas. Cada página é representada por um componente específico, como Home, Catalog, Detail, Blog, ContactUs, etc. */
