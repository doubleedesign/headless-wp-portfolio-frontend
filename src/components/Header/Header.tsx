import React, { FC } from 'react';
import { HeaderWrapper, HeaderMenu } from './Header.styled';
import { MenuItem } from '../../types';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
	menuItems: MenuItem[]
}

const Header: FC<HeaderProps> = ({ menuItems }) => {

	return (
		<HeaderWrapper>
			<HeaderMenu>
				<ul>
					{menuItems && menuItems.map((item) => {
						return (
							<li key={item.id}>
								<NavLink to={item.route}>{item.title}</NavLink>
							</li>
						);
					})}
				</ul>
			</HeaderMenu>
		</HeaderWrapper>
	);
};

export default Header;
