import React  from 'react';
import styled, {css} from 'styled-components'
import { motion, AnimatePresence } from "framer-motion";

const isFlatMixin = (props) => {
	const cardShadow = css`
		box-shadow: ${({ theme }) => theme.style.box_shadow[0]}
	`;
	return props.flat ? null : cardShadow;
};

const backgroundColor = (props) => {
	const cardBackground = css`
		background-color: ${props.backgroundColor};
	`;
	return props.backgroundColor ? cardBackground : null;
};

const boxShadow = (props) => {
	const defaultBoxShadow = css`
		box-shadow: ${({ theme }) => theme.style.box_shadow[props.boxShadow]};
	`;
	return props.boxShadow > 0 ? defaultBoxShadow : null;
};

const updateBorderRadius = (props) => {
	const defaultBorderRadius = css`
		border-radius: ${({ theme }) => theme.style.borderRadius[props.borderRadius]};
	`;
	return props.borderRadius ? defaultBorderRadius : null;
};

const fontColor = (props) => {
	const color = css`
		color: ${props.color};
	`;
	return props.color ? color : null;
};

const removePadding = (props) => {
	const p = css`
		padding: ${({theme}) => theme.style.padding[0]};
	`;
	return props.padding ? null : p;
};

const Card = styled.div`
 border-radius: 0.1875rem;
 background-color:  ${({ theme }) => theme.colors.white};
 box-sizing: border-box;
 color: ${({ theme }) => theme.colors.black};
 margin: 0;
 min-width: 6.25rem;
 padding: ${({ theme }) => theme.style.padding[1]};
 overflow: hidden;
 transition: 1s ease-in-out;
 width: 100%;
 justify-content: space-around;
 ${(props) => isFlatMixin(props)};
 ${(props) => boxShadow(props)};
 ${(props) => backgroundColor(props)};
 ${(props) => updateBorderRadius(props)};
 ${(props) => fontColor(props)};
 ${(props) => removePadding(props)};
	
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

export default (props) => {
	const {
		boxShadow,
		borderRadius,
		flat,
		backgroundColor,
		color,
		animate,
		padding,
		...RemainingProps} = props;
	return (
			<Card
				boxShadow={boxShadow}
				borderRadius={borderRadius}
				flat={flat}
				backgroundColor={backgroundColor}
				color={color}
				padding={padding}
				{...RemainingProps}>
				<AnimatePresence initial={animate === true} >
					<motion.div
						key={props.children}
						initial={{ x: 300, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.7, ease: 'easeInOut' }}
						exit={{ x: -300,  opacity: 0}}
					>
						{props.children}
					</motion.div>
				</AnimatePresence>
			</Card>
		)
}
