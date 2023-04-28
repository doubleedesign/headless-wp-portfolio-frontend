import React, { FC } from 'react';
import { PageItem } from '../../types';
import parse from 'html-react-parser';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Page.module.scss';

interface PageProps {
	data: PageItem;
}

const Page: FC<PageProps> = ({ data }) => {

	return (
		<section className={`${styles.Page} bg-${data.colour_theme}`}>
			<Container>
				<Row>
					<Col>
						{parse(data?.content)}
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Page;
