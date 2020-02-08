import React from 'react';
import App from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components';

export const theme = {
	style: {
		box_shadow: [
			`none`,
			'0 0.0625rem 0.1875rem rgba(0,0,0,0.12), 0 0.0625rem 0.125rem rgba(0,0,0,0.24);',
			`0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);`
		],
		borderRadius: [
			'0rem',
			'1rem'
		],
		gridColumns: {
			dashboardLayout: '4rem 1fr',
			dashboardContent: '1fr 25%'
		},
		padding: [
			'0',
			'0.75rem 1rem 0.75rem 0.875rem',
			'0.75rem 1rem 0.75rem 0'
		]
	},
	colors: {
		black: '#000',
		button_disabled: 'rgba(0, 0, 0, 0.26)',
		button_disabled_bg: 'rgba(0, 0, 0, 0.12)',
		button_height: '2.25rem',
		default: 'rgba(0,0,0,.3)',
		defaultBackgroundColor: 'white',
		disabled: '#f5f5f5',
		disabled_NavBar_Item: '#8BB7F1',
		fontFamily: 'Roboto, sans-serif',
		green: '#50bc91',
		blue: '#347DDB',
		input_border_hover: 'rgba(0,0,0,.87)',
		red: '#FF1654',
		white: '#fff',
		font_medium: '1rem',
		width_medium: '12.5rem',
		chartColors: {
			backgroundColor: ['rgba(80, 188, 145, 0.6)', 'rgba(255, 22, 85, 0.6)', 'rgba(52, 125, 219, 0.6)', 'rgba(255,255,99, 0.6)'],
			disabledBackground: ['rgba(80, 188, 145, 0.2)', 'rgba(255, 22, 85, 0.2)', 'rgba(52, 125, 219, 0.2)', 'rgba(255,255,99, 0.2)'],
			hoverColor: ['rgba(80, 188, 145, 1)', 'rgba(255, 22, 85, 1)', 'rgba(52, 125, 219, 1)', 'rgba(255,255,99, 1)'],
			borderColor: ['rgba(80, 188, 145, 1)', 'rgba(255, 22, 85, 1)', 'rgba(52, 125, 219, 1)', 'rgba(255,255,99, 1)']
		},

	},
};

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.colors.defaultBackgroundColor};
    font-family: ${props => props.theme.fontFamily};
  }
`;

export default class Vault extends App {
	render() {
		const { Component, pageProps } = this.props;
			return (
				<ThemeProvider theme={theme}>
					<title>Vault</title>
					<GlobalStyle />
					<Component {...pageProps}/>
				</ThemeProvider>
		)
	}
};
