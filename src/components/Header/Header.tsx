import React, { FC } from 'react';
import { HeaderWrapper, HeaderMenu, HeaderLogo } from './Header.styled';
import { MenuItem } from '../../types';
import { NavLink } from 'react-router-dom';
import { FlexRow } from '../common.styled';

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
		<HeaderWrapper>
			<FlexRow>
				<HeaderLogo>
					{props.logo && <img src={props.logo.url} alt={props.logo.alt}/> }
				</HeaderLogo>
				<HeaderMenu>
					<ul>
						{props.menuItems && props.menuItems.map((item) => {
							return (
								<li key={item.id}>
									<NavLink to={item.route}>{item.title}</NavLink>
								</li>
							);
						})}
					</ul>
				</HeaderMenu>
			</FlexRow>
		</HeaderWrapper>
	);
};

export default Header;
