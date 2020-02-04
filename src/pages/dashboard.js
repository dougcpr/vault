import React  from 'react'
import Card from '../components/Card';
import styled from 'styled-components'
import DashboardLayout from '../layouts/DashboardLayout';

const DashboardContainer = styled.div`
	display: grid;
	grid-template-columns: ${({theme}) => theme.style.gridColumns.dashboardContent};
`;

const MainLayout = styled.div`
	display: grid;
	column-gap: 1rem;
	grid-template-rows: 0.5fr 2fr 2fr;
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
			<DashboardContainer>
				<MainLayout>
					<Header>
						<Card
							borderRadius={1}
							backgroundColor={({ theme }) => theme.colors.blue}
						>Header</Card>
					</Header>
					<GraphCardLayout>
						<Card borderRadius={1} backgroundColor={({ theme }) => theme.colors.blue}>Line Graph - showing how much experience they earned per session</Card>
						<Card borderRadius={1} backgroundColor={({ theme }) => theme.colors.green}>Polar Area Chart</Card>
						<Card borderRadius={1} backgroundColor={({ theme }) => theme.colors.red}>Radar Chart - showing bad/good events for all players.</Card>
					</GraphCardLayout>
					<Footer>
						<Card borderRadius={1} backgroundColor={({ theme }) => theme.colors.blue}>Histogram of battles, side quests, and main quests color coded</Card>
						<Card borderRadius={1} backgroundColor={({ theme }) => theme.colors.green}>Bar Chart - battles, side quests, and main quests</Card>
					</Footer>
				</MainLayout>
				<CalendarLayout>
					<Card  backgroundColor={({ theme }) => theme.colors.blue}>Quick Team Stats</Card>
					<Card  backgroundColor={({ theme }) => theme.colors.green}>Calendar</Card>
					<Card  backgroundColor={({ theme }) => theme.colors.red}>Notifications</Card>
				</CalendarLayout>
			</DashboardContainer>
		</DashboardLayout>
	)
}
