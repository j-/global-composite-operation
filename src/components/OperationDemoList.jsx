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

const OperationDemoListItem = ({ operation, ...props }) => (
	<li>
		<h2><pre>{ operation }</pre></h2>
		<OperationDemo
			operation={ operation }
			width={ 100 }
			height={ 100 }
			{ ...props }
		/>
	</li>
);

const OperationDemoList = ({ ...props }) => (
	<ul>
		{
			operations.map((operation) => (
				<OperationDemoListItem
					key={ operation }
					operation={ operation }
				/>
			))
		}
	</ul>
);

module.exports = OperationDemoList;
