import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import CenterLayout from '../layouts/CenterLayout';
import Table from '../components/Table/Table'

const toggleVisibility = ({modal}) => {
	const visible = css`
		display: block !important;
	`;
	return modal ? visible : null;
};

const ModalContainer = styled.div`
	background-color: rgba(0,0,0,0.4);
	position: absolute;
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
	const {visibility, ...RemainingProps} = props;
	const [modal, toggleModal] = useState(visibility);
	function dismiss() {
		toggleModal(!modal)
	}
	return (
		<ModalContainer modal={modal} onClick={() => dismiss()}>
			<CenterLayout>
				<ModalBody onClick={(e) => {e.stopPropagation()}}>
					<Table />
				</ModalBody>
			</CenterLayout>
		</ModalContainer>
	)
}
