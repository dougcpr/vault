import React from 'react'
// layouts
import CenterLayout from '../layouts/CenterLayout';
import ButtonGrid from '../layouts/DualButtonGrid';
// components
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
// router
import Router from 'next/router'

export default () => {
	async function back() {
		await Router.push('/login')
	}
	async function register() {
		await Router.push('/login');
	}
	const [username, password, confirmPassword] = '';
	return (
		<CenterLayout>
			<Card>
				<Input value={username} label="Username"/>
				<Input value={password} type="password" label="Password"/>
				<Input value={confirmPassword} type="password" label="Confirm Password"/>
				<ButtonGrid>
					<Button onClick={back} block>Back</Button>
					<div/>
					<Button onClick={register} block>Register</Button>
				</ButtonGrid>
			</Card>
		</CenterLayout>
	)
}
