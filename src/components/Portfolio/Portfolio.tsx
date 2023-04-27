import React, { FC, useState } from 'react';
import styles from './Portfolio.module.scss';

const Portfolio: FC = () => {
	const [items, setItems] = useState();

	async function fetchPortfolio() {
		//return axios.get(`${api}/items`);
	}

	return (
		<div className={styles.Portfolio}>
			Portfolio Component
		</div>
	);
};

export default Portfolio;
