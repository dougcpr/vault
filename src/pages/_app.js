import React from 'react';
import App from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
	style: {
		box_shadow: [
			'0 0.0625rem 0.1875rem rgba(0,0,0,0.12), 0 0.0625rem 0.125rem rgba(0,0,0,0.24);',
			`0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);`
		],
		borderRadius: [
			'0',
			'1rem'
		],
		padding: [
			'0',
			'0.75rem 1rem 0.75rem 0.875rem',
			'0.75rem 1rem 0.75rem 0'
		]
	},
	colors: {
		background_color_nav: '#347DDB',
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
		blue: '#60CDFF',
		input_border_hover: 'rgba(0,0,0,.87)',
		red: '#FF6260',
		white: '#fff',
		font_medium: '1rem',
		width_medium: '12.5rem'
	},
};

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: ${props => props.theme.fontFamily};
  }
`;

export default class Vault extends App {
	render() {
		const { Component, pageProps } = this.props;
			return (
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Component {...pageProps}/>
				</ThemeProvider>
		)
	}
};
