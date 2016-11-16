const React = require('react');
const OperationDemoListItem = require('./OperationDemoListItem');

const {
	Form,
	FormField,
	FormInput,
	Button,
} = require('elemental');

class CustomOperationDemo extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			operation: props.defaultOperation,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange (e) {
		this.setState({
			operation: e.target.value,
		});
	}

	render () {
		const { operation } = this.state;
		const {
			fillDest,
			fillSource,
		} = this.props;
		return (
			<Form type="horizontal">
				<FormField label="Composite operation">
					<FormInput
						type="text"
						value={ operation }
						onChange={ this.handleInputChange }
					/>
				</FormField>
				<OperationDemoListItem
					operation={ operation }
					width={ 200 }
					height={ 200 }
					fillDest={ fillDest }
					fillSource={ fillSource }
				/>
			</Form>
		);
	}
}

CustomOperationDemo.propTypes = {
	defaultOperation: React.PropTypes.string,
	fillDest: React.PropTypes.string.isRequired,
	fillSource: React.PropTypes.string.isRequired,
};

CustomOperationDemo.defaultProps = {
	defaultOperation: 'source-over',
};

module.exports = CustomOperationDemo;
