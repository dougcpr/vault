import React  from 'react';
import styled, {css} from 'styled-components'

const isFlatMixin = ({flat}) => {
	const cardShadow = css`
		box-shadow: ${({ theme }) => theme.style.box_shadow[1]}
	`;
	return flat ? null : cardShadow;
};

const updateCursor = ({cursor}) => {
	const updateCursor = css`
		cursor: ${cursor};
	`;
	return cursor ? updateCursor : null;
};

const backgroundColor = ({backgroundColor}) => {
	const cardBackground = css`
		background-color: ${backgroundColor};
	`;
	return backgroundColor ? cardBackground : null;
};

const boxShadow = ({boxShadow}) => {
	const defaultBoxShadow = css`
		box-shadow: ${({ theme }) => theme.style.box_shadow[boxShadow]};
	`;
	return boxShadow > 0 ? defaultBoxShadow : null;
};

const updateBorderRadius = ({borderRadius}) => {
	const defaultBorderRadius = css`
		border-radius: ${({ theme }) => theme.style.borderRadius[borderRadius]};
	`;
	return borderRadius ? defaultBorderRadius : null;
};

const fontColor = ({color}) => {
	const textColor = css`
		color: ${color};
	`;
	return color ? textColor : null;
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
 width: 100%;
 justify-content: space-around;
 ${(props) => isFlatMixin(props)};
 ${(props) => boxShadow(props)};
 ${(props) => backgroundColor(props)};
 ${(props) => updateBorderRadius(props)};
 ${(props) => fontColor(props)};
 ${(props) => removePadding(props)};
 ${(props) => updateCursor(props)};
	
	@media (max-width : 812px) {
		border-radius: 0;
		box-shadow: ${({ theme }) => theme.style.box_shadow[0]};
		height: 100vh;
		width: 100vw;
		border-bottom: 1px solid black;
  }
}
`;

export default (props) => {
	const {
		boxShadow,
		borderRadius,
		cursor,
		flat,
		backgroundColor,
		color,
		padding = true,
		...RemainingProps} = props;
	return (
			<Card
				boxShadow={boxShadow}
				borderRadius={borderRadius}
				flat={flat}
				backgroundColor={backgroundColor}
				color={color}
				cursor={cursor}
				padding={padding}
				{...RemainingProps}>
					{props.children}
			</Card>
		)
}
