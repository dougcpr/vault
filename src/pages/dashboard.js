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
	function handleName(e) {
		setItemName(e.target.value);
	}
	function handleLocation(e) {
		setLocation(e.target.value);
	}
	function handleCategory(e) {
		console.log(e.target.value);
	}
	const [itemName, setItemName] = useState('');
	const [location, setLocation] = useState('');
	const [category] = useState('');
	const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];
	return (
		<DashboardContainer>
			<Dashboard>
				<DashboardLayout>
					<GridLayout>
						<Dropdown onChange={handleCategory}  label='Select a Category' items={categories} />
						<Input value={itemName}  onChange={handleName}  label='Item Name'/>
						<Input value={location} onChange={handleLocation}  label='Location'/>
						<Button onClick={addItem} block>Add Item</Button>
					</GridLayout>
					<Table />
				</DashboardLayout>
			</Dashboard>
		</DashboardContainer>
	)
}
