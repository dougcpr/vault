import React from 'react';
import styled, {css} from 'styled-components'

const mobileCenterLayout = ({mobileOptimization}) => {
	const mobileCenter = css`
	  @media (max-width : 812px) {
			position: relative;
	    top: auto;
	    left: auto;
	    transform: none;
	  }
	`;
	return mobileOptimization ? mobileCenter : null;
};

const Center = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
	${(props) => mobileCenterLayout(props)};
`;

export default (props) => {
	const {mobileOptimization, ...RemainingProps} = props;
	return (
		<Center
			mobileOptimization={mobileOptimization}
		>{props.children}</Center>
	)
};
