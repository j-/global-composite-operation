const React = require('react');
const { canvas } = require('./canvas');

class OperationDemo extends React.Component {
	addCanvasToElement () {
		const element = this.refs.root;
		if (!element) {
			return;
		}
		const { canvas } = this.props;
		element.appendChild(canvas);
	}

	componentDidMount () {
		this.addCanvasToElement();
	}

	render () {
		const {
			canvas,
			context,
			operation,
			width,
			height,
			...props,
		} = this.props;
		return <div ref="root" style={{ width, height }} { ...props } />;
	}
};

OperationDemo.propTypes = {
	canvas: React.PropTypes.instanceOf(HTMLElement).isRequired,
	context: React.PropTypes.instanceOf(CanvasRenderingContext2D).isRequired,
	operation: React.PropTypes.string.isRequired,
	width: React.PropTypes.number.isRequired,
	height: React.PropTypes.number.isRequired,
};

const OperationDemoContainer = canvas(OperationDemo);

OperationDemoContainer.propTypes = {
	width: React.PropTypes.number,
	height: React.PropTypes.number,
};

OperationDemoContainer.defaultProps = {
	width: 300,
	height: 150,
};

module.exports = OperationDemoContainer;
