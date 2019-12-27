import React from 'react';
import styled from 'styled-components';

const Header = styled.th`
	padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: ${({ theme }) => theme.colors.green};;
  color: white;
  border: 1px solid #ddd;
  padding: 0.75rem 1rem 0.875rem;
  font-weight: normal;
`;

export default (props) => {
	const {width, ...RemainingProps} = props;
	return (
		<Header width={width}>{props.children}</Header>
	)
}
