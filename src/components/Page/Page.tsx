import React, { FC } from 'react';
import { PageWrapper } from './Page.styled';
import { PageItem } from '../../types';

interface PageProps {
	data: PageItem;
}

const Page: FC<PageProps> = ({ data }) => {
	//console.log(data);

	return (
		<PageWrapper>
			<h1>{data.title}</h1>
		</PageWrapper>
	);
};

export default Page;
