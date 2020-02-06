import React  from 'react'
import Card from '../components/Card';
import styled from 'styled-components'
import DashboardLayout from '../layouts/DashboardLayout';
import { Line, Radar, Bar, Doughnut } from 'react-chartjs-2';
import { BarChartData, DonutChartData, LineChartData, RadarChartData } from '../utils/chart.helper.js'

const DashboardContainer = styled.div`
	display: grid;
	grid-template-columns: ${({theme}) => theme.style.gridColumns.dashboardContent};
`;

const MainLayout = styled.div`
	display: grid;
	column-gap: 1rem;
	grid-template-rows: 1fr 1fr;
	row-gap: 1rem;
	padding: ${({ theme }) => theme.style.padding[1]};
`;

const GraphCardLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 1rem;
`;

const Footer = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	column-gap: 1rem;
`;

const CalendarLayout = styled.div`
	padding: ${({theme}) => theme.style.padding[2]};
	display: grid;
  row-gap: 1rem;
  grid-template-rows: 1fr 1.5fr 2fr;
`;

export default () => {
	return (
		<DashboardLayout>
			<DashboardContainer>
				<MainLayout>
					<GraphCardLayout>
						<Card borderRadius={1}>
							<Bar data={BarChartData} width={100} height={180} options={{maintainAspectRatio: false}}/>
						</Card>
						<Card borderRadius={1} >
							<Radar legend={{display: false}} data={RadarChartData} width={100} height={60} />
						</Card>
					</GraphCardLayout>
					<Footer>
						<Card borderRadius={1} >
							<Line data={LineChartData} width={100} height={200} options={{ maintainAspectRatio: false }}
							/>
						</Card>
						<Card borderRadius={1} >
							<Doughnut legend={{display: true}} width={100} height={100} data={DonutChartData} />
						</Card>
					</Footer>
				</MainLayout>
				<CalendarLayout>
					<Card backgroundColor={({ theme }) => theme.colors.blue}>Quick Team Stats</Card>
					<Card backgroundColor={({ theme }) => theme.colors.red}>Notifications</Card>
					<Card backgroundColor={({ theme }) => theme.colors.green}>Calendar</Card>
				</CalendarLayout>
			</DashboardContainer>
		</DashboardLayout>
	)
};
