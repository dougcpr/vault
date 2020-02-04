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
		headers = [{value: 'Character', width: '25%'}, {value: 'Action', width: '30%'}, {value: 'Location'}],
		tableData = [
			[{value: 'Character A'}, {value: 'Attacks Character C for X DMG'}, {value: 'Row 1 Text Element 3'}],
			[{value: 'Character C'}, {value: 'Attacks Character B for X DMG'}, {value: 'Row 1 Text Element 3'}],
			[{value: 'Character B'}, {value: 'Heals Character A for X HEALTH'}, {value: 'Row 1 Text Element 3'}]],
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
