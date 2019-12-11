import React from 'react';
import styled from 'styled-components'
import { motion } from "framer-motion";

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

const config = {
	type: "spring",
	damping: 20,
	stiffness: 100
};

export default (props) => {
	const {subject} = props;
	return (
			<Card>
				<motion.div
					transition={config}
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ x: 0, opacity: 0 }}
				>
					<Subject>{subject}</Subject>
					{props.children}
				</motion.div>
			</Card>
		)
}
