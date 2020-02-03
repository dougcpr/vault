import React  from 'react'
import NavBar from '../components/NavBar';
import CenterLayout from '../layouts/CenterLayout';
import Card from '../components/Card';
import styled from 'styled-components'

const DashboardLayout = styled.div`
	column-gap: 1rem;
	display: grid;
	grid-template-columns: 6.25rem 1fr 20%;
	width: 80vw;
	height: 80vh;
`;

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
  grid-template-rows: 1fr 2fr 1fr;
`;

export default () => {
	return (
			<CenterLayout>
				<Card borderRadius={1} boxShadow={1} padding={false}>
					<DashboardLayout>
						<NavBar/>
						<MainLayout>
							<Header>
								<Card
									borderRadius={1}
									backgroundColor={({ theme }) => theme.colors.green}
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
				</Card>
			</CenterLayout>
	)
}
