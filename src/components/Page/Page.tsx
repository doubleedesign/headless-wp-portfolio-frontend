import React, { FC } from 'react';
import { PageItem } from '../../types';
import parse from 'html-react-parser';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface PageProps {
	data: PageItem;
}

const Page: FC<PageProps> = ({ data }) => {

	return (
		<Container as="section">
			<Row>
				<Col>
					{parse(data?.content?.rendered)}
				</Col>
			</Row>
		</Container>
	);
};

export default Page;
