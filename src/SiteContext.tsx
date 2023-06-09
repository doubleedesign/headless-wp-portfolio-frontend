import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';
import axios from 'axios';
import { MenuItem, SiteSettings } from './types';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import { imageLoaded } from './utils';

interface MyAppContext {
	domainKey: string;
	api: string;
	settings: SiteSettings | undefined;
	menu: MenuItem[];
	loaded: boolean
}

export const SiteContext = createContext({} as MyAppContext);

const SiteContextProvider: React.FC<PropsWithChildren> = function({ children }) {
	const baseURL = (window.location.hostname);
	const domainKey = baseURL.replace('www.', '').split('.')[0];
	//const api = 'https://api.doubleedesign.com.au/wp-json/wp/v2';
	const api = 'http://double-e-design.local/wp-json/wp/v2';
	const [settings, setSettings] = useState<SiteSettings>();
	const [menu, setMenu] = useState<MenuItem[]>([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {

		axios.get(`${api}/menu?location=${domainKey}`)
			.then(response => {
				setMenu(response.data.map((item: any) => {
					return {
						id: item.ID,
						title: item.title,
						// Get the path without the API site domain, API path, and leading and trailing slashes
						route: item.url.replace(api.replace('/wp-json/wp/v2', ''), '').replace(/^\/|\/$/g, '')
					};
				}));
			})
			.catch(e => console.error(e.message));

		axios.get(`${api}/global-settings`)
			.then(response => setSettings(response.data))
			.catch(e => console.error(e.message));
	}, []);

	useEffect(() => {
		if(settings && menu) {
			if(settings?.sitename === 'Double-E Design') {
				document.title = `${settings.sitename} | ${settings.tagline}`;
				if(settings.logo?.url) {
					imageLoaded(settings?.logo.url).then(status => setLoaded(status));
				}
			}
			else {
				document.title = 'Leesa Ward | Developer, Designer | Wearer of Many Hats';
				setLoaded(true);
			}
		}
	}, [settings, menu]);


	return (
		<SiteContext.Provider value={{ domainKey, api, settings, menu, loaded }}>
			{ loaded && children }
			<LoadingScreen loaded={loaded} />
		</SiteContext.Provider>
	);
};

export default SiteContextProvider;
