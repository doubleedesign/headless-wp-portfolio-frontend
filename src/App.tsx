import React from 'react';
import './global.style.scss';
import './App.style.scss';
import SiteContextProvider from './SiteContext';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';

function App() {

	return (
		<SiteContextProvider>
			<Header />
			<Homepage />
		</SiteContextProvider>
	);
}

export default App;
