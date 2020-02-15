import React, {useState} from 'react';
import styled from 'styled-components'
import Modal from '../components/Modal';
import {theme} from '../pages/_app';

const App = styled.div``;

export default (props) => {
	function toggle() {
		toggleModal(!visibility);
	}
	const [visibility, toggleModal] = useState(theme.modal);
	const {...RemainingProps} = props;
	return (
		<App toggleModal={toggleModal}>
			{props.children}
			<Modal visibility={visibility ? 1 : 0} toggleModal={toggleModal} />
		</App>
	)
};
