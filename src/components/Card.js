import React  from 'react';
import styled, {css} from 'styled-components'
import { motion, AnimatePresence } from "framer-motion";

const isFlatMixin = (props) => {
	const cardShadow = css`
		box-shadow: ${({ theme }) => theme.style.box_shadow}
	`;
	return props.flat ? null : cardShadow;
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
	
	@media (max-width : 425px) {
    width: 100vw;
    height: 100vh;
    max-height: 100%;
    max-width: 100%;
    padding: 3.125rem;
  }

  @media (max-width: 812px) {
    height: 70vh;
    box-shadow: none;
  }
}
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
				flat={flat}
				{...RemainingProps}>
				<AnimatePresence>
					<motion.div
						key={props.children}
						initial={{ x: 300, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.7, ease: 'easeInOut' }}
						exit={{ x: -300,  opacity: 0}}
					>
						<Subject>{subject}</Subject>
						{props.children}
					</motion.div>
				</AnimatePresence>
			</Card>
		)
}
