const React = require('react');
const OperationDemoListItem = require('./OperationDemoListItem');

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
