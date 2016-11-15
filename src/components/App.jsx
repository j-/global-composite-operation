const React = require('react');
const OperationDemoList = require('./OperationDemoList');

const App = () => (
	<div>
		<h1>Global Composite Operation</h1>
		<p>In each canvas below, the red 'destination' square is rendered first,
		then the blue 'source' square.</p>
		<OperationDemoList />
	</div>
);

module.exports = App;
