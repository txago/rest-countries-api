import styled from 'styled-components';

export default styled.div`
	background: ${props => props.theme.colors.cardBackground};
	padding: 24px;
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	max-width: 300px;
	width: 100%;
	min-height: 100px;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
	font-size: 24px;
`;
