import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderWrapper = styled.div`
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const Header = ({ children }) => {
	return (
		<HeaderWrapper>
			<div className='container'>
				<h1>Where in the world?</h1>
				<>{children}</>
			</div>
		</HeaderWrapper>
	);
};

Header.propTypes = {
	children: PropTypes.node.isRequired
};

export default Header;
