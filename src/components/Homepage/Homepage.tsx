import React, { FC, useContext, useState, useEffect } from 'react';
import { MenuItem, PageItem } from '../../types';
import Page from '../Page/Page';
import axios from 'axios';
import { SiteContext } from '../../SiteContext';

const Homepage: FC = () => {
	const { api, domainKey, menu, loaded } = useContext(SiteContext);
	const [pages, setPages] = useState<PageItem[]>();

	useEffect(() => {
		axios.get(`${api}/pages?domain=${domainKey}`).then(response => {
			setPages(response.data.map((item: any) => {
				return {
					id: item.id,
					title: item.title,
					route: item.slug,
					content: item.content,
					colour_theme: item.colour_theme
				};
			}));
		}).catch(e => console.error(e.message));
	}, []);


	return (
		<>
			{loaded &&
				<main>
					{pages && menu && menu.map((item: MenuItem) => {
						const page = pages.find((page) => page.route === item.route);

						return page && <Page key={page.id} data={page}/>;
					})}
				</main>
			}
		</>
	);
};

export default Homepage;
