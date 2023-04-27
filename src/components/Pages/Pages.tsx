import React, { FC, useContext, useState, useEffect } from 'react';
import styles from './Pages.module.scss';
import { MenuItem, PageItem } from '../../types';
import Page from '../Page/Page';
import axios from 'axios';
import { SiteContext } from '../../SiteContext';

const Pages: FC = () => {
	const { api, domainKey, menu, loaded } = useContext(SiteContext);
	const [pages, setPages] = useState<PageItem[]>();

	useEffect(() => {
		axios.get(`${api}/pages?domain=${domainKey}`).then(response => {
			setPages(response.data.map((item: any) => {
				// console.log(item);
				return {
					id: item.id,
					title: item.post_title,
					route: item.post_name,
					content: item.post_content
				};
			}));
		}).catch(e => console.error(e.message));
	}, []);

	return (
		<>
			{loaded &&
				<main className={styles.Pages}>
					{pages && menu && menu.map((item: MenuItem) => {
						const page = pages.find((page) => page.route === item.route);

						return page && <Page key={page.id} data={page}/>;
					})}
				</main>
				}
		</>
	);
};

export default Pages;
