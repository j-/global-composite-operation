const React = require('react');
const OperationDemoList = require('./OperationDemoList');
const CustomOperationDemo = require('./CustomOperationDemo');
const DemoSettings = require('./DemoSettings');

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			fillDest: 'red',
			fillSource: 'blue',
		};
		this.updateSettings = this.updateSettings.bind(this);
	}

	updateSettings ({ fillDest, fillSource }) {
		this.setState({
			fillDest,
			fillSource,
		});
	}

	render () {
		const {
			fillDest,
			fillSource,
		} = this.state;
		return (
			<div>
				<h1>Global Composite Operation</h1>
				<h2>Settings</h2>
				<DemoSettings
					fillDest={ fillDest }
					fillSource={ fillSource }
					onUpdateSettings={ this.updateSettings }
				/>
				<h2>Operations</h2>
				<p>In each canvas below, the 'destination' square is rendered
				first, then the 'source' square.</p>
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
