import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

const Routez = () => {
	return (
		<Routes>
			<Route path='/:category/search/:keyword' element={<Catalog />} />
			<Route path='/:category/:id' element={<Detail />} />
			<Route path='/:category' element={<Catalog />} />
			<Route index element={<Home />} />
		</Routes>
	);
};

export default Routez;

/* O documento Routes.jsx é um componente React que faz parte do projeto. 

Eis a explicação do código linha por linha:

import React from 'react';: Importa a biblioteca React para criar componentes React.

import { Route, Routes } from 'react-router-dom';: Importa os componentes Route e Routes da biblioteca react-router-dom. Esses componentes são usados para definir as rotas da aplicação.

import Home from '../pages/Home';: Importa o componente Home do arquivo Home.jsx localizado na pasta pages.

import Catalog from '../pages/Catalog';: Importa o componente Catalog do arquivo Catalog.jsx localizado na pasta pages.

import Detail from '../pages/detail/Detail';: Importa o componente Detail do arquivo Detail.jsx localizado na pasta pages/detail.

const Routez = () => {: Define o componente Routez como uma função de seta sem receber propriedades.

<Routes>: Renderiza o componente Routes, que é o componente pai para todas as rotas da aplicação.

<Route path='/:category/search/:keyword' element={<Catalog />} />: Define uma rota com o caminho /:category/search/:keyword que renderiza o componente Catalog quando acessado.

<Route path='/:category/:id' element={<Detail />} />: Define uma rota com o caminho /:category/:id que renderiza o componente Detail quando acessado.

<Route path='/:category' element={<Catalog />} />: Define uma rota com o caminho /:category que renderiza o componente Catalog quando acessado.

<Route index element={<Home />} />: Define uma rota sem caminho específico, que é a rota inicial da aplicação, e renderiza o componente Home quando acessado.

</Routes>: Fecha o componente Routes.

export default Routez;: Exporta o componente Routez para que possa ser importado e utilizado em outros arquivos.

O componente Routez define as rotas da aplicação utilizando o componente Routes e os componentes Route. Cada rota é definida com um caminho específico e um componente a ser renderizado quando essa rota for acessada. As rotas definidas são: /:category/search/:keyword, /:category/:id, /:category e a rota inicial. */
