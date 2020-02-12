import React, {useState} from 'react'
// layouts
import CenterLayout from '../layouts/CenterLayout';
import styled from 'styled-components'
// components
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
// router
import Router from 'next/router'

export default () => {
	const BackLink = styled.div`
		cursor: pointer;
		font-weight: 500;
		margin-top: 0.5rem;
		text-align: end;
		text-decoration: underline;
	`;
	async function back() {
		await Router.push('/')
	}
	async function register() {
		await Router.push('/');
	}
	function handleUsername(e) {
		setUsername(e.target.value);
	}

	function handlePassword(e) {
		setPassword(e.target.value);
	}
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	return (
		<CenterLayout>
			<Card>
				<Input aria-label="Username" value={username} onChange={handleUsername} label="Username"/>
				<Input aria-label="Password" value={password} onChange={handlePassword} type="password" label="Password"/>
				<Button onClick={register} block>Register</Button>
				<div><BackLink onClick={back}>Back</BackLink></div>
			</Card>
		</CenterLayout>
	)
}
