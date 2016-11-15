const React = require('react');

class DemoSettings extends React.Component {
	constructor (props) {
		super(props);
		const { fillDest, fillSource } = props;
		this.state = { fillDest, fillSource };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangeFillDest = this.handleChangeFillDest.bind(this);
		this.handleChangeFillSource = this.handleChangeFillSource.bind(this);
	}

	updateSettings () {
		const { fillDest, fillSource } = this.state;
		this.props.onUpdateSettings({ fillDest, fillSource });
	}

	handleSubmit (e) {
		e.preventDefault();
		this.updateSettings();
	}

	handleChangeFillDest (e) {
		this.setState({
			fillDest: e.target.value,
		});
	}

	handleChangeFillSource (e) {
		this.setState({
			fillSource: e.target.value,
		});
	}

	render () {
		const { fillDest, fillSource } = this.state;
		return (
			<form onSubmit={ this.handleSubmit }>
				<label>
					<strong>Destination</strong><br />
					<input
						type="text"
						value={ fillDest }
						onChange={ this.handleChangeFillDest }
					/>
				</label><br />
				<label>
					<strong>Source</strong><br />
					<input
						type="text"
						value={ fillSource }
						onChange={ this.handleChangeFillSource }
					/>
				</label><br />
				<button type="submit">Apply</button>
			</form>
		);
	}
}

DemoSettings.propTypes = {
	onUpdateSettings: React.PropTypes.func.isRequired,
};

module.exports = DemoSettings;
