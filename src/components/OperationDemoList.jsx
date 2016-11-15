const React = require('react');
const OperationDemo = require('./OperationDemo');

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
	<li>
		<h3><pre>{ operation }</pre></h3>
		<OperationDemo
			operation={ operation }
			width={ 100 }
			height={ 100 }
			fillDest={ fillDest }
			fillSource={ fillSource }
			{ ...props }
		/>
	</li>
);

const OperationDemoList = ({ fillDest, fillSource, ...props }) => (
	<ul>
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
	</ul>
);

module.exports = OperationDemoList;
