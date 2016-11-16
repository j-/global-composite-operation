const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/App');

require('./styles');

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
