import React  from 'react';
import styled, {css} from 'styled-components'
import { motion, AnimatePresence } from "framer-motion";

const isFlatMixin = (props) => {
	const cardShadow = css`
		box-shadow: ${({ theme }) => theme.style.box_shadow}
	`;
	return props.flat ? cardShadow : null;
};

const Card = styled.div`
 border-radius: 0.1875rem;
 background-color: ${({ theme }) => theme.colors.white};
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
 
	${(props) => isFlatMixin(props)};
`;

const Subject = styled.div`
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 0.25rem;
  text-align: center;
`;

export default (props) => {
	const {subject, flat, ...RemainingProps} = props;
	return (
			<Card
				{...RemainingProps}>
				<AnimatePresence>
					<motion.div
						flat={flat}
						key={props.children}
						initial={{ x: 300, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.5, ease: 'easeInOut' }}
						exit={{ x: -300,  opacity: 0}}
					>
						<Subject>{subject}</Subject>
						{props.children}
					</motion.div>
				</AnimatePresence>
			</Card>
		)
}
