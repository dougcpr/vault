import React from 'react'
import CenterLayout from '../layouts/CenterLayout';
import ButtonGrid from '../layouts/DualButtonGrid';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import Router from 'next/router'

export default () => {
	async function login() {
		const login =  await fetch(
			'api/post/login',
			{
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({username, password})
			});
		// await Router.push('/dashboard')
	}
	async function register() {
		await Router.push('/register');
	}
	const [username, password] = '';
	return (
		<CenterLayout>
			<Card>
				<Input value={username} label="Username"/>
				<Input value={password} type="password" label="Password"/>
				<ButtonGrid>
					<Button onClick={register} block>Register</Button>
					<div/>
					<Button onClick={login} block>Login</Button>
				</ButtonGrid>
			</Card>
		</CenterLayout>
	)
}
