import React from 'react'
import CenterLayout from '../layouts/CenterLayout';
import ButtonGrid from '../layouts/DualButtonGrid';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import Router from 'next/router'

export default () => {
	async function login() {
		try {
			const response = await fetch(
				'http://localhost:3000/api/post/login',
				{
					method: 'POST',
					body: JSON.stringify({username, password}),
					headers: {
						'Content-Type': 'application/json',
					}
				});
			const json = await response.json();
			console.log('Success:', JSON.stringify(json));
		} catch (error) {
			console.error(error);
		}
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
