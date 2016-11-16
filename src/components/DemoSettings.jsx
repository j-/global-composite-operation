const React = require('react');

const {
	Form,
	FormField,
	FormInput,
	Button,
} = require('elemental');

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
			<Form type="horizontal" onSubmit={ this.handleSubmit }>
				<FormField label="Destination">
					<FormInput
						type="text"
						value={ fillDest }
						onChange={ this.handleChangeFillDest }
					/>
				</FormField>
				<FormField label="Source">
					<FormInput
						type="text"
						value={ fillSource }
						onChange={ this.handleChangeFillSource }
					/>
				</FormField>
				<FormField offsetAbsentLabel>
					<Button submit>Apply</Button>
				</FormField>
			</Form>
		);
	}
}

DemoSettings.propTypes = {
	onUpdateSettings: React.PropTypes.func.isRequired,
};

module.exports = DemoSettings;
