import React from 'react'
import css from 'styled-components'
import Card from '../components/Card'
import GridThreeCardLayout from '../layouts/GridThreeCardLayout';

const Dashboard = css.div``;
export default () => {
	return (
		<Dashboard>
			<GridThreeCardLayout>
				<Card backgroundColor='#BBDEFB' subject='Encounters'/>
				<Card backgroundColor='#80CBC4' subject='Players'/>
				<Card backgroundColor='#B39DDB' subject='Quests'/>
			</GridThreeCardLayout>
			<GridThreeCardLayout>
			</GridThreeCardLayout>
		</Dashboard>
	)
}
