import React  from 'react';
import styled, {css} from 'styled-components'

// TODO: Too many props?
const isFlatMixin = ({flat}) => {
	const flatCard = css`
		box-shadow: ${({ theme }) => theme.style.box_shadow[0]}
		border-radius: ${({ theme }) => theme.style.borderRadius[0]}
	`;
	return flat ? flatCard : null;
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
	const customBoxShadow = css`
		box-shadow: ${({ theme }) => theme.style.box_shadow[boxShadow]};
	`;
	return boxShadow >= 0 ? customBoxShadow : null;
};

const updateBorderRadius = ({borderRadius}) => {
	const defaultBorderRadius = css`
		border-radius: ${borderRadius}rem;
	`;
	return borderRadius >= 0 ? defaultBorderRadius : null;
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
 ${(props) => boxShadow(props)};
 ${(props) => backgroundColor(props)};
 ${(props) => updateBorderRadius(props)};
 ${(props) => fontColor(props)};
 ${(props) => removePadding(props)};
 ${(props) => updateCursor(props)};
 ${(props) => isFlatMixin(props)};
 @media (max-width : 812px) {
  border-radius: 0;
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
