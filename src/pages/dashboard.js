import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button';
import Input from '../components/Input'
import Dropdown from '../components/Dropdown';
import GridLayout from '../layouts/GridLayout';
import Table from '../components/Table/Table';
import DashboardLayout from '../layouts/DashboardLayout';

const DashboardContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.defaultBackgroundColor};
	display: flex;
	height: 100vh;
`;
const Dashboard = styled.div`
	margin: 5rem;
	width: 100%;
	
	@media (max-width : 425px) {
		margin: 0;
		flex-direction: row;
	}
`;
export default () => {
	function addItem() {

		console.log(category, itemName, location);
	}
	const [itemName, setItemName] = useState('');
	const [location, setLocation] = useState('');
	const [category, setCategory] = useState('');
	const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];
	const locations = ['Location 1', 'Location 2', 'Location 3', 'Location 4', 'Location 5'];
	return (
		<DashboardContainer>
			<Dashboard>
				<DashboardLayout>
					<GridLayout>
						<Dropdown onSelected={(value) => {setCategory(value)}} label='Select a Category' items={categories}/>
						<Dropdown value={location} onSelected={(value) => {setLocation(value)}} items={locations} label='Select a Location'/>
						<Input value={itemName}  onChange={(e) => {setItemName(e.target.value)}}  label='Item Name'/>
						<Button onClick={addItem} block>Add Item</Button>
					</GridLayout>
					<Table />
				</DashboardLayout>
			</Dashboard>
		</DashboardContainer>
	)
}
