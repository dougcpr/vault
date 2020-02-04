import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import DashboardLayout from '../layouts/DashboardLayout';

const MainContainer = styled.div`
	column-gap: 1rem;
	display: grid;
	grid-template-columns: 1fr 20%;
	padding: ${({ theme }) => theme.style.padding[1]};
	row-gap: 1rem;
`;

const QuestsContainer = styled.div`
	overflow: scroll;
	column-gap: 1rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-rows: 40%;
	row-gap: 1rem;
	height: 100%;
`;

const RewardsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 2fr;
	row-gap: 1rem;
`;

export default () => {
	return (
		<DashboardLayout>
			<MainContainer>
				<QuestsContainer>
					<Card backgroundColor={({ theme }) => theme.colors.blue}/>
					<Card backgroundColor={({ theme }) => theme.colors.green}/>
					<Card backgroundColor={({ theme }) => theme.colors.red}/>
					<Card backgroundColor={({ theme }) => theme.colors.blue}/>
					<Card backgroundColor={({ theme }) => theme.colors.green}/>
					<Card backgroundColor={({ theme }) => theme.colors.red}/>
					<Card backgroundColor={({ theme }) => theme.colors.blue}/>
					<Card backgroundColor={({ theme }) => theme.colors.green}/>
				</QuestsContainer>
				<RewardsContainer>
					<Card backgroundColor={({ theme }) => theme.colors.blue}/>
					<Card backgroundColor={({ theme }) => theme.colors.green}/>
				</RewardsContainer>
			</MainContainer>
		</DashboardLayout>
	)
}
