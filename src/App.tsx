import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { MenuItem, PageItem } from './types';
import Page from './components/Page/Page';

function App() {
	const baseURL = 'http://double-e-design.local'; // TODO: local/prod envs
	const api = `${baseURL}/wp-json/wp/v2`;
	const [menu, setMenu] = useState<MenuItem[]>([]);
	const [pages, setPages] = useState<PageItem[]>();
	const [items, setItems] = useState();

	async function fetchMenu() {
		return axios.get(`${api}/menu`);
	}

	async function fetchPages() {
		return axios.get(`${api}/pages`);
	}

	async function fetchPortfolio() {
		return axios.get(`${api}/items`);
	}

	useEffect(() => {
		fetchMenu().then(response => setMenu(response.data.map((item: any) => {
			return {
				id: item.ID,
				title: item.title,
				route: item.url.replace(baseURL, '')
			};
		})));

		fetchPages().then(response => setPages(response.data.map((item: any) => {
			return {
				id: item.id,
				title: item.title.rendered,
				route: item.link.replace(baseURL, ''),
				content: item.content
			};
		})));

		//fetchPortfolio().then(response => setItems(response.data));
	}, []);

	useEffect(() => {
		//console.log(pages);
	}, [pages]);

	return (
		<>
			<Header menuItems={menu} />
			<Routes>
				{pages && menu && menu.map((item) => {
					const page = pages.find((page) => page.route === item.route);

					return page && <Route key={page.id} path={page.route} element={<Page data={page} />} />;
				})}
			</Routes>
		</>
	);
}

export default App;
