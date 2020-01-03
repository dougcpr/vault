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
		headers = [{value: 'Category', width: '19%'}, {value: 'Item Name', width: '20%'}, {value: 'Location'}],
		tableData = [
			[{value: 'Row 1 Text Element 1'}, {value: 'Row 1 Text Element 2'}, {value: 'Row 1 Text Element 3'}],
			[{value: 'Row 2 Text Element 1'}, {value: 'Row 2 Text Element 2'}, {value: 'Row 1 Text Element 3'}]],
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
