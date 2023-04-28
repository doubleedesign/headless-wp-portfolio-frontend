import React, { FC, useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MenuItem } from '../../types';
import styles from './Header.module.scss';
import { SiteContext } from '../../SiteContext';


const Header: FC = () => {
	const { settings, menu, loaded } = useContext(SiteContext);

	return (
		<>
			{loaded && settings && menu &&
				<Container as="header" className={styles.siteHeader}>
					<Row>
						<Col xs={4} lg={3}>
							{settings.logo && <img src={settings.logo.url} alt={settings.logo.alt} className={styles.logo} /> }
						</Col>
						<Col as="nav" xs={12} sm={'auto'}>
							<ul>
								{menu && menu.map((item: MenuItem) => {
									return (
										<li key={item.id}>
											<a href={`#${item.route}`}>{item.title}</a>
										</li>
									);
								})}
							</ul>
						</Col>
					</Row>
				</Container>
			}
		</>
	);
};

export default Header;
