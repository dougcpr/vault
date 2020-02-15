import React, {useState} from 'react';
import fetch from 'isomorphic-unfetch';
import DashboardLayout from '../layouts/DashboardLayout';
import PropTypes from 'prop-types';
import Dropdown from '../components/Dropdown';
import Card from '../components/Card';
import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';
import {DiffAdded} from 'styled-icons/octicons/DiffAdded';

const CombatLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr;
  grid-auto-rows: 4rem 1fr;
	padding: ${({theme}) => theme.style.padding[1]};
`;

const DropdownContainer = styled.div`
	display: grid;
	column-gap: 1rem;
	grid-template-columns: 1fr;
`;

const EncounterContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 40%;
	column-gap: 1rem;
	@media (max-width : 812px) {
		row-gap: 1rem;
		grid-template-columns: 1fr;
  }
`;
const MonstersContainer = styled.div`
	overflow: scroll;
	column-gap: 1rem;
	row-gap: 1rem;
  display: grid;
  grid-auto-rows: 45%;
  grid-template-columns: 1fr 1fr;
	@media (max-width : 812px) {
		row-gap: 1rem;
		justify-content: center;
    grid-auto-rows: 10rem;
		grid-template-columns: 1fr 1fr;
  }
`;

const ActionsContainer = styled.div`
    grid-template-rows: 3rem 3rem 3rem 1fr;
    display: grid;
    row-gap: 1rem;
    grid-template-columns: 1fr;
    @media (max-width : 812px) {
			row-gap: 0rem;
			grid-template-rows: 1fr 1fr;
      grid-auto-rows: auto;
    }
`;

const ActionContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 1rem;
	@media (max-width : 812px) {
		grid-template-columns: 1fr 1fr;
  }
`;

const CenterIcon = styled.div`
		position: relative;
    top: 45%;
    left: 50%;
    transform: translate(-45%, -50%);
    width: min-content;
`;

const AddIcon = styled(DiffAdded)`
		width: 3rem;
		height: 3rem;
    :hover {
      cursor: pointer;
      color: ${({theme}) => theme.colors.green};
    }
`;

const InitiativeList = styled.div`
`;

const CombatView = ({monsterLibrary}) => {
	const [encounter, setEncounter] = useState('');
	const encounters = ['Encounter 1', 'Encounter 2', 'Encounter 3', 'Encounter 4'];
	const [action, setAction] = useState('Damage');
	const actions = ['Damage', 'Heal'];
	const [target, setTarget] = useState('Player 1');
	const players = ['Player 1', 'Player 2', 'Player 3'];
	return (
		<DashboardLayout>
			<CombatLayout>
				<DropdownContainer>
					<Dropdown value={encounter} onSelected={(value) => {setEncounter(value)}} label={'Encounter 1'} items={encounters}/>
				</DropdownContainer>
				<EncounterContainer>
					<MonstersContainer>
						<Card flat backgroundColor={({ theme }) => theme.colors.disabled_NavBar_Item}>Main Monster 1</Card>
						<Card flat backgroundColor={({ theme }) => theme.colors.disabled_NavBar_Item}>Main Monster 2</Card>
						<Card flat backgroundColor={({ theme }) => theme.colors.disabled_NavBar_Item}>Main Monster 3</Card>
						<Card flat backgroundColor={({ theme }) => theme.colors.disabled_NavBar_Item}>Main Monster 4</Card>
						<Card flat backgroundColor={({ theme }) => theme.colors.disabled_NavBar_Item}>Main Monster 5</Card>
						<Card flat backgroundColor={({ theme }) => theme.colors.disabled_NavBar_Item}>Main Monster 6</Card>
						<Card flat backgroundColor={({ theme }) => theme.colors.disabled_NavBar_Item}>Main Monster 7</Card>
						<Card flat >
							<CenterIcon>
								<AddIcon />
							</CenterIcon>
						</Card>
					</MonstersContainer>
					<ActionsContainer>
						<ActionContainer>
							<Dropdown value={action} onSelected={(value) => {setAction(value)}} label={'Damage'} items={actions}/>
							<Input aria-label="Amount" label="Amount"/>
						</ActionContainer>
						<Dropdown value={target} onSelected={(value) => {setTarget(value)}} label={'Player 1'} items={players}/>
						<ActionContainer>
							<Button block>{action} {target}</Button>
							<Button block>End Turn</Button>
						</ActionContainer>
						<Card backgroundColor={({ theme }) => theme.colors.green} borderRadius={1} boxShadow={1}>
							<InitiativeList />
						</Card>
					</ActionsContainer>
				</EncounterContainer>
			</CombatLayout>
		</DashboardLayout>
	)
};

CombatView.propTypes = {
	monsterLibrary: PropTypes.object
};

CombatView.getInitialProps = async() => {
	// call 5e database for monsters
	const monsterResponse = await fetch(`
	https://api.open5e.com/monsters/?
	fields=slug,name,challenge_rating,type,size,hit_points,document__slug,%20document__title&
	limit=2000&
	ordering=slug`);
	// parse the response into the surveyDefinition
	const monsterLibrary = await monsterResponse.json();
	return {monsterLibrary};
};

export default CombatView;
