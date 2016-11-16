const React = require('react');
const OperationDemo = require('./OperationDemo');

const {
	Card,
} = require('elemental');

const OperationDemoListItem = ({
	fillDest,
	fillSource,
	operation,
	width,
	height,
	...props,
}) => (
	<Card>
		<pre><h3>{ operation }</h3></pre>
		<OperationDemo
			operation={ operation }
			width={ width }
			height={ height }
			fillDest={ fillDest }
			fillSource={ fillSource }
			{ ...props }
		/>
	</Card>
);

OperationDemoListItem.propTypes = {
	fillDest: React.PropTypes.string.isRequired,
	fillSource: React.PropTypes.string.isRequired,
	operation: React.PropTypes.string.isRequired,
	width: React.PropTypes.number,
	height: React.PropTypes.number,
};

OperationDemoListItem.defaultProps = {
	width: 100,
	height: 100,
};

module.exports = OperationDemoListItem;
