const React = require('react');
const OperationDemo = require('./OperationDemo');

const {
	Card,
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

const OperationDemoListItem = ({ fillDest, fillSource, operation, ...props }) => (
	<Card>
		<pre><h3>{ operation }</h3></pre>
		<OperationDemo
			operation={ operation }
			width={ 100 }
			height={ 100 }
			fillDest={ fillDest }
			fillSource={ fillSource }
			{ ...props }
		/>
	</Card>
);

const OperationDemoList = ({ fillDest, fillSource, ...props }) => (
	<div>
		{
			operations.map((operation) => (
				<OperationDemoListItem
					key={ operation }
					operation={ operation }
					fillDest={ fillDest }
					fillSource={ fillSource }
				/>
			))
		}
	</div>
);

module.exports = OperationDemoList;
