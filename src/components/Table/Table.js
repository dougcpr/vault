import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import Header from './Header';
import TextElement from './TextElement';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export default (props) => {
	const {
		headers = [{value: 'Character'}, {value: 'Health'}],
		tableData = [
			[{value: 'Character A'}, {value: '10'}],
			[{value: 'Enemy B'}, {value: '8'}],
			[{value: 'Enemy A'}, {value: '8'}],
			[{value: 'Character C'}, {value: '6'}],
			[{value: 'Character B'}, {value: '12'}]],
		...RemainingProps
	} = props;
	return (
		<Table>
			<Row>
				{headers.map((header, i) => {
					return (<Header key={i} width={header.width}>{header.value}</Header>)
				})}
			</Row>
			{tableData.map((row, i) => {
				return (
					<Row key={i}>
						{row.map((element, i) => {
							return (
								// <Cell>
									<TextElement key={i}>
										{element.value}
									</TextElement>
								// </Cell>
							)
						})}
					</Row>)
			})}
		</Table>
	)
}
