import React, { FC } from 'react';
import { PageItem } from '../../types';

interface PageProps {
	data: PageItem;
}

const Page: FC<PageProps> = ({ data }) => {
	//console.log(data);

	return (
		<div>
			<h1>{data.title}</h1>
		</div>
	);
};

export default Page;
