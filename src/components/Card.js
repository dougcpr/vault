import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
 border-radius: 0.1875rem;
 background-color: ${({ theme }) => theme.colors.white};
 box-shadow: 0 0.0625rem 0.1875rem rgba(0,0,0,0.12), 0 0.0625rem 0.125rem rgba(0,0,0,0.24);
 box-sizing: border-box;
 color: ${({ theme }) => theme.colors.default};
 display: flex;
 flex-direction: column;
 margin: 0;
 min-width: 6.25rem;
 max-width: 15.625rem;
 overflow: hidden;
 padding: 0.75rem 1rem 0.75rem 0.875rem;
 transition: 1s ease-in-out;
 width: 100%;
 justify-content: space-around;
`;

const Subject = styled.div`
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 0.25rem;
  text-align: center;
`;

export default (props) => {
	const {subject} = props;
	return (
		<Card>
			<Subject>{subject}</Subject>
			{props.children}
		</Card>
		)
}
