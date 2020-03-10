import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const HeaderLink = styled.h1`
	color: ${({ theme }) => theme.textColor};
`;

const Header = ({ children }) => {
	return (
		<HeaderWrapper>
			<Link to={'/'}>
				<div className='container'>
					<HeaderLink>Where in the world?</HeaderLink>
					<>{children}</>
				</div>
			</Link>
		</HeaderWrapper>
	);
};

Header.propTypes = {
	children: PropTypes.node.isRequired
};

export default Header;
