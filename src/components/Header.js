import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
	background-color: ${({ theme }) => theme.cardBackground};
`;

const ContainerRow = styled.div`
	width: auto;
	height: 80px;
	margin: 0 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (min-width: 576px) {
		width: 540px;
		margin: 0 auto;
	}
	@media (min-width: 768px) {
		width: 720px;
		margin: 0 auto;
	}
	@media (min-width: 1024px) {
		width: 960px;
		margin: 0 auto;
	}
	@media (min-width: 1280px) {
		width: 1140px;
		margin: 0 auto;
	}
	@media (min-width: 1366px) {
		width: 1280px;
		margin: 0 auto;
	}
`;

const HeaderLink = styled.h1`
	color: ${({ theme }) => theme.textColor};
`;

const Header = ({ children }) => {
	return (
		<HeaderWrapper>
			<ContainerRow>
				<Link to={'/'}>
					<HeaderLink>Where in the world?</HeaderLink>
				</Link>
				<>{children}</>
			</ContainerRow>
		</HeaderWrapper>
	);
};

Header.propTypes = {
	children: PropTypes.node.isRequired
};

export default Header;
