import React from 'react';
import { node } from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
	}
	@media (min-width: 1024px) {
		width: 960px;
	}
	@media (min-width: 1280px) {
		width: 1140px;
	}
	@media (min-width: 1366px) {
		width: 1280px;
	}
`;

const Header = ({ children }) => {
	return (
		<HeaderWrapper>
			<ContainerRow>
				<Link to={'/'}>
					<h1>Where in the world?</h1>
				</Link>
				{children}
			</ContainerRow>
		</HeaderWrapper>
	);
};

Header.propTypes = {
	children: node.isRequired
};

export default Header;
