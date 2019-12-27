import React from 'react';
import styled from 'styled-components';

const TextElement = styled.td`
	border: 1px solid #ddd;
  padding: 0.75rem 1rem 0.875rem;
`;

export default (props) => {
	const {...RemainingProps} = props;
	return (
		<TextElement>
			{props.children}
		</TextElement>
	)
}
