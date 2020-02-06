import Document, {Head, Main, NextScript} from 'next/document';
import { ServerStyleSheet } from 'styled-components'
import React from 'react';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
				});
			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			}
		} finally {
			sheet.seal()
		}
	}
	render () {
		const noScriptMessage = `
      Enable JavaScript.
    `;

		return (
			<html lang={'en'}>
			<Head>
				<meta name="Description" content="provide charts and task logging to make a dm's task of managing a group simpler" />
				<meta name='viewport' content='initial-scale=1.0, width=device-width'/>
				<title>Vault</title>
			</Head>
			<body>
			<noscript>
				<strong>{noScriptMessage}</strong>
			</noscript>
			<Main />
				<NextScript/>
			</body>
			</html>
		);
	}
}
