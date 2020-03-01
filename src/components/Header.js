import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderWrapper = styled.div`
	width: 100vw;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const HeaderContainer = styled.div`
	width: 1280px;
	height: 80px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const SiteTitle = styled.h1`
	font-size: 24px;
`;

const Header = ({ children }) => {
	return (
		<HeaderWrapper>
			<HeaderContainer>
				<SiteTitle>Where in the world?</SiteTitle>
				<>{children}</>
			</HeaderContainer>
		</HeaderWrapper>
	);
};

Header.propTypes = {
	children: PropTypes.node.isRequired
};

export default Header;
