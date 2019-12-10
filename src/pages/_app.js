import React from 'react';
import App from 'next/app'
import { ThemeProvider } from 'styled-components';

const theme = {
	colors: {
		black: '#000',
		button_disabled: 'rgba(0, 0, 0, 0.26)',
		button_disabled_bg: 'rgba(0, 0, 0, 0.12)',
		button_height: '2.25rem',
		default: 'rgba(0,0,0,.3)',
		disabled: '#f5f5f5',
		green: '#50bc91',
		input_border_hover: 'rgba(0,0,0,.87)',
		red: '#bc5b50',
		white: '#fff',
		font_medium: '1rem',
		width_medium: '12.5rem'
	},
};

export default class Vault extends App {
	render() {
		const { Component, pageProps } = this.props;
			return (
				<ThemeProvider theme={theme}>
					<Component {...pageProps} />
				</ThemeProvider>
		)
	}
};
