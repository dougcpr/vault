import React  from 'react'
import Card from '../components/Card';
import styled from 'styled-components'
import DashboardLayout from '../layouts/DashboardLayout';

const MainLayout = styled.div`
	display: grid;
	column-gap: 1rem;
	row-gap: 1rem;
	padding: ${({ theme }) => theme.style.padding[1]};
`;

const Header = styled.div`
	display: grid;
	grid-template-columns: 1fr;
`;

const GraphCardLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	column-gap: 1rem;
`;

const Footer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 1rem;
`;

const CalendarLayout = styled.div`
	padding: ${({theme}) => theme.style.padding[2]};
	display: grid;
  row-gap: 1rem;
  grid-template-rows: 1fr 2fr 1.5fr;
`;

export default () => {
	return (
		<DashboardLayout>
			<MainLayout>
				<Header>
					<Card
						borderRadius={1}
						backgroundColor={({ theme }) => theme.colors.blue}
					/>
				</Header>
				<GraphCardLayout>
					<Card borderRadius={1} backgroundColor={({ theme }) => theme.colors.blue}/>
					<Card borderRadius={1} backgroundColor={({ theme }) => theme.colors.green}/>
					<Card borderRadius={1} backgroundColor={({ theme }) => theme.colors.red}/>
				</GraphCardLayout>
				<Footer>
					<Card borderRadius={1} backgroundColor={({ theme }) => theme.colors.blue}/>
					<Card borderRadius={1} backgroundColor={({ theme }) => theme.colors.green}/>
				</Footer>
			</MainLayout>
			<CalendarLayout>
				<Card  backgroundColor={({ theme }) => theme.colors.blue}/>
				<Card  backgroundColor={({ theme }) => theme.colors.green}/>
				<Card  backgroundColor={({ theme }) => theme.colors.red}/>
			</CalendarLayout>
		</DashboardLayout>
	)
}
