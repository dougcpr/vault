import React, { useState } from 'react';
import CenterLayout from '../layouts/CenterLayout';
import ButtonGrid from '../layouts/DualButtonGrid';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import Router from 'next/router'

export default () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	async function login() {
		const body = {username, password};
		try {
			const response = await fetch(
				'http://localhost:3000/api/post/login',
				{
					method: 'POST',
					body: JSON.stringify(body),
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

	function handleUsername(e) {
		setUsername(e.target.value);
	}

	function handlePassword(e) {
		setPassword(e.target.value);
	}

	return (
		<CenterLayout>
			<Card flat>
				<Input value={username} onChange={handleUsername} label="Username"/>
				<Input value={password}  onChange={handlePassword} type="password" label="Password"/>
				<ButtonGrid>
					<Button onClick={register} block>Register</Button>
					<div/>
					<Button onClick={login} block>Login</Button>
				</ButtonGrid>
			</Card>
		</CenterLayout>
	)
}
