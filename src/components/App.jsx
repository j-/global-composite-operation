const React = require('react');
const OperationDemoList = require('./OperationDemoList');
const CustomOperationDemo = require('./CustomOperationDemo');
const DemoSettings = require('./DemoSettings');
const Ribbon = require('./Ribbon');

const {
	Alert,
} = require('elemental');

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
			<div className="app">
				<Ribbon />
				<h1>Global Composite Operation</h1>
				<h2>Settings</h2>
				<DemoSettings
					fillDest={ fillDest }
					fillSource={ fillSource }
					onUpdateSettings={ this.updateSettings }
				/>
				<h2>Operations</h2>
				<Alert type="info">In each canvas below, the <strong>destination</strong> square is
				rendered first, then the <strong>source</strong> square.</Alert>
				<OperationDemoList
					fillDest={ fillDest }
					fillSource={ fillSource }
					cols={ 4 }
				/>
				<h2>Custom</h2>
				<Alert type="info">Use this to test blending modes which may be supported by
				your browser but are not in the list above.</Alert>
				<CustomOperationDemo
					fillDest={ fillDest }
					fillSource={ fillSource }
				/>
			</div>
		);
	}
}

module.exports = App;
