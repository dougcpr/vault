import React, {useState} from 'react';
import styled from 'styled-components'
import Modal from '../components/Modal';
import {theme} from '../pages/_app';

export const AppContext = React.createContext(undefined, undefined);

const App = styled.div``;

export default (props) => {
	const [visibility, toggleModal] = useState(theme.modal);
	const {...RemainingProps} = props;
	return (
		<App toggleModal={toggleModal}>
			{/* set up app context and pass state mgmt for toggling modal to child components */}
			<AppContext.Provider value={{visibility: visibility, toggleModal: toggleModal }}>
				{props.children}
			</AppContext.Provider>
			<Modal visibility={visibility ? 1 : 0} toggleModal={toggleModal} />
		</App>
	)
};
