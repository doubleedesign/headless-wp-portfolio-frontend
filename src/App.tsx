import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SiteSettings, MenuItem, PageItem } from './types';
import './global.style.scss';
import './App.style.scss';
import Header from './components/Header/Header';
import Page from './components/Page/Page';

function App() {
	const baseURL = 'http://double-e-design.local'; // TODO: local/prod envs
	const api = `${baseURL}/wp-json/wp/v2`;
	const [settings, setSettings] = useState<SiteSettings>();
	const [menu, setMenu] = useState<MenuItem[]>([]);
	const [pages, setPages] = useState<PageItem[]>();
	const [items, setItems] = useState();

	async function fetchSettings() {
		const response = await axios.get(`${api}/global-settings`);

		setSettings(response.data);
	}

	async function fetchMenu() {
		const response = await axios.get(`${api}/menu?location=doubleedesign`);

		setMenu(response.data.map((item: any) => {
			return {
				id: item.ID,
				title: item.title,
				route: item.url.replace(baseURL, '')
			};
		}));
	}

	async function fetchPages() {
		const response = await axios.get(`${api}/pages`);

		setPages(response.data.map((item: any) => {
			console.log(item);
			return {
				id: item.id,
				title: item.title.rendered,
				route: item.link.replace(baseURL, ''),
				content: item.content
			};
		}));
	}

	async function fetchPortfolio() {
		//return axios.get(`${api}/items`);
	}

	useEffect(() => {
		fetchSettings().then();
		fetchMenu().then();
		fetchPages().then();
	}, []);

	return (
		<>
			<Header siteName="Double-E Design" logo={settings?.logo} menuItems={menu} />
			{pages && menu && menu.map((item) => {
				const page = pages.find((page) => page.route === item.route);
				return page && <Page key={page.id} data={page} />;
			})}
		</>
	);
}

export default App;
