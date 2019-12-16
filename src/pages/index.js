import Router from 'next/router'
import React from 'react';
import CenterLayout from '../layouts/CenterLayout';

export default () => {
	(async () => {
		try {
			await Router.push('/login')
		} catch (error) {
			console.error(error)
		}
	})();
	return (
		<CenterLayout>Loading...</CenterLayout>
	)
}
