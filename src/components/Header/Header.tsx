import React, { FC } from 'react';
import { HeaderWrapper } from './Header.styled';
import { MenuItem } from '../../types';

interface HeaderProps {
	menuItems: MenuItem[]
}

const Header: FC<HeaderProps> = () => (
	<HeaderWrapper>
		Header Component
	</HeaderWrapper>
);

export default Header;
