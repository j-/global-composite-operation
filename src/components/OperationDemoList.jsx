const React = require('react');
const OperationDemoListItem = require('./OperationDemoListItem');

const {
	Row,
	Col,
} = require('elemental');

const operations = [
	'source-over',
	'source-in',
	'source-out',
	'source-atop',
	'destination-over',
	'destination-in',
	'destination-out',
	'destination-atop',
	'lighter',
	'copy',
	'xor',
	'multiply',
	'screen',
	'overlay',
	'darken',
	'lighten',
	'color-dodge',
	'color-burn',
	'hard-light',
	'soft-light',
	'difference',
	'exclusion',
	'hue',
	'saturation',
	'color',
	'luminosity',
];

const OperationDemoList = ({ fillDest, fillSource, operations, cols, ...props }) => {
	const sm = cols <= 1 ? null : `1/${cols}`;
	const children = operations.map((operation) => (
		<Col sm={ sm } key={ operation }>
			<OperationDemoListItem
				operation={ operation }
				fillDest={ fillDest }
				fillSource={ fillSource }
			/>
		</Col>
	));
	return <Row>{ children }</Row>;
};

OperationDemoList.propTypes = {
	fillDest: React.PropTypes.string.isRequired,
	fillSource: React.PropTypes.string.isRequired,
	operations: React.PropTypes.arrayOf(React.PropTypes.string),
	cols: React.PropTypes.number,
};

OperationDemoList.defaultProps = {
	cols: 1,
	operations: operations,
};

module.exports = OperationDemoList;
