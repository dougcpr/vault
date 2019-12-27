import React from 'react';
import App from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
	style: {
		box_shadow: '0 0.0625rem 0.1875rem rgba(0,0,0,0.12), 0 0.0625rem 0.125rem rgba(0,0,0,0.24);'
	},
	colors: {
		black: '#000',
		button_disabled: 'rgba(0, 0, 0, 0.26)',
		button_disabled_bg: 'rgba(0, 0, 0, 0.12)',
		button_height: '2.25rem',
		default: 'rgba(0,0,0,.3)',
		defaultBackgroundColor: 'white',
		disabled: '#f5f5f5',
		fontFamily: 'Roboto, sans-serif',
		green: '#50bc91',
		input_border_hover: 'rgba(0,0,0,.87)',
		red: '#bc5b50',
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
