import React from 'react';
import styled from 'styled-components';

const TableBody = styled.tbody`
`;

const Row = styled.tr`
	:hover {
		background-color: #ddd;
	}
	:nth-child(even) {
		background-color: #f2f2f2;
	}
`;

export default (props) => {
	const {...RemainingProps} = props;
	return (
		<TableBody>
			<Row>{props.children}</Row>
		</TableBody>
	)
}
