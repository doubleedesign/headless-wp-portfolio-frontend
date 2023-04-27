import React from 'react';
import './global.style.scss';
import './App.style.scss';
import Header from './components/Header/Header';
import SiteContextProvider from './SiteContext';
import Pages from './components/Pages/Pages';

function App() {

	return (
		<SiteContextProvider>
			<Header />
			<Pages />
		</SiteContextProvider>
	);
}

export default App;
