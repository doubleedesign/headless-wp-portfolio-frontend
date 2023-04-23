import styled, { css } from 'styled-components';
import { breakpointUp } from '@doubleedesign/styled-media-queries';

export const HeaderWrapper = styled.header`
	padding: ${({ theme }): string => theme.spacing.sm};
`;

export const HeaderLogo = styled.div`
	width: 100%;
	flex-basis: 100%;
	
	${({ theme }) => {
        return breakpointUp(theme.breakpoints.md, css`
	        width: 25%;
	        flex-basis: 25%;
        `);
    }};
	
	img {
		max-width: 100%;
	}
`;

export const HeaderMenu = styled.nav`
    width: 100%;
    flex-basis: 100%;

    ${({ theme }) => {
        return breakpointUp(theme.breakpoints.md, css`
	        width: 75%;
	        flex-basis: 75%;
        `);
    }};
`;
