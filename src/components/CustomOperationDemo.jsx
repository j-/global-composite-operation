const React = require('react');
const OperationDemo = require('./OperationDemo');

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
			<div>
				<input type="text" value={ operation } onChange={ this.handleInputChange } />
				<OperationDemo
					operation={ operation }
					width={ 200 }
					height={ 200 }
					fillDest={ fillDest }
					fillSource={ fillSource }
				/>
			</div>
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
