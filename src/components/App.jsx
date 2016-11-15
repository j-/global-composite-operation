const React = require('react');
const OperationDemoList = require('./OperationDemoList');

const App = () => (
	<div>
		<h1>Global Composite Operation</h1>
		<h2>Operations</h2>
		<p>In each canvas below, the red 'destination' square is rendered first,
		then the blue 'source' square.</p>
		<OperationDemoList />
	</div>
);

module.exports = App;
