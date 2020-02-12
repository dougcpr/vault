import React, { useState } from 'react';
import styled from 'styled-components'
import CenterLayout from '../layouts/CenterLayout';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import Router from 'next/router'

export default () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	async function login() {
		// const body = {username, password};
		try {
			// const response = await fetch(
			// 	'http://localhost:3000/api/post/login',
			// 	{
			// 		method: 'POST',
			// 		body: JSON.stringify(body),
			// 		headers: {
			// 			'Content-Type': 'application/json',
			// 		}
			// 	});
			await Router.push('/dashboard')
		} catch (error) {
			console.error(error);
		}
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

	const Registration = styled.div`
		margin-top: 0.5rem;
		text-align: end;
	`;

	const RegisterLink = styled.span`
		cursor: pointer;
		text-decoration: underline;
	`;

	const LoginCard = styled(Card)`
	@media (max-width : 812px) {
		width: 80vw;
  }
	`;

	return (
		<CenterLayout>
			<LoginCard>
				<Input aria-label="Username" value={username} onChange={handleUsername} label="Username"/>
				<Input aria-label="Password" value={password}  onChange={handlePassword} disabled={true} type="password" label="Password"/>
				<Button onClick={login} block>Login</Button>
				<Registration>Register your character <RegisterLink onClick={register}>here</RegisterLink>.</Registration>
			</LoginCard>
		</CenterLayout>
	)
}
