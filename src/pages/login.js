import React from 'react'
import CenterLayout from '../layouts/CenterLayout';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';

export default () => {
	function login() {
		console.log(username, password);
	}
	const [username, password] = '';
	return (
		<CenterLayout>
			<Card>
				<Input value={username} label="Username"/>
				<Input value={password} type="password" label="Password"/>
				<Button onClick={login} block>Login</Button>
			</Card>
		</CenterLayout>
	)
}
