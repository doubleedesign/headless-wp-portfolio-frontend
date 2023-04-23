import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MenuItem } from '../../types';
import styles from './Header.module.scss';

interface HeaderProps {
	logo?: {
		url: string;
		alt: string;
	}
	siteName: string;
	menuItems: MenuItem[]
}

const Header: FC<HeaderProps> = (props: HeaderProps) => {

	return (
		<Container as="header" className={styles.siteHeader}>
			<Row>
				<Col xs={4} lg={3}>
					{props.logo && <img src={props.logo.url} alt={props.logo.alt} className={styles.logo} /> }
				</Col>
				<Col as="nav" xs={12} sm={'auto'}>
					<ul>
						{props.menuItems && props.menuItems.map((item) => {
							return (
								<li key={item.id}>
									<a href={item.route.replace('/',  '#')}>{item.title}</a>
								</li>
							);
						})}
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default Header;
