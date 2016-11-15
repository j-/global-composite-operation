const React = require('react');
const OperationDemoList = require('./OperationDemoList');
const CustomOperationDemo = require('./CustomOperationDemo');

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			fillDest: 'red',
			fillSource: 'blue',
		};
	}

	render () {
		const {
			fillDest,
			fillSource,
		} = this.state;
		return (
			<div>
				<h1>Global Composite Operation</h1>
				<h2>Operations</h2>
				<p>In each canvas below, the red 'destination' square is
				rendered first, then the blue 'source' square.</p>
				<OperationDemoList
					fillDest={ fillDest }
					fillSource={ fillSource }
				/>
				<h2>Custom</h2>
				<p>Use this to test blending modes which may be supported by
				your browser but are not in the list above.</p>
				<CustomOperationDemo
					fillDest={ fillDest }
					fillSource={ fillSource }
				/>
			</div>
		);
	}
}

module.exports = App;
