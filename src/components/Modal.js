import React from 'react';
import styled, {css} from 'styled-components';
import CenterLayout from '../layouts/CenterLayout';
import Table from '../components/Table/Table'

// Maybe removing?
const toggleVisibility = ({visibility}) => {
	const visible = css`
		display: block !important;
	`;
	return visibility ? visible : null;
};

const ModalContainer = styled.div`
	background-color: rgba(0,0,0,0.4);
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: none !important;
	${(props) => toggleVisibility(props)};
`;

const ModalBody = styled.div`
	background-color: white;
	border-radius: 0.25rem;
	height: 50vh;
	overflow: scroll;
	padding: 1rem;
	width: 50vw;
`;

export default (props) => {
	let {visibility, toggleModal, ...RemainingProps} = props;
	return (
		<ModalContainer visibility={visibility} onClick={() => toggleModal(!visibility)}>
			<CenterLayout>
				<ModalBody onClick={(e) => {e.stopPropagation()}}>
					<Table />
				</ModalBody>
			</CenterLayout>
		</ModalContainer>
	)
}
