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
		this.renderCanvas();
	}

	componentWillUpdate () {
		this.renderCanvas();
	}

	renderCanvas () {
		if (!this.refs.root) {
			return;
		}
		this.draw(this.props.context, this.props.operation);
	}

	draw (ctx, operation) {
		const { width, height, fillDest, fillSource } = this.props;
		ctx.save();
		ctx.clearRect(0, 0, width, height);
		ctx.globalCompositeOperation = operation;
		ctx.fillStyle = fillDest;
		ctx.fillRect(0, 0, width * 0.75, height * 0.75);
		ctx.fillStyle = fillSource;
		ctx.fillRect(width * 0.25, height * 0.25, width * 0.75, height * 0.75);
		ctx.restore();
	}

	render () {
		const {
			canvas,
			context,
			operation,
			width,
			height,
			fillDest,
			fillSource,
			...props,
		} = this.props;
		this.renderCanvas();
		return <div ref="root" style={{ width, height }} { ...props } />;
	}
};

OperationDemo.propTypes = {
	canvas: React.PropTypes.instanceOf(HTMLElement).isRequired,
	context: React.PropTypes.instanceOf(CanvasRenderingContext2D).isRequired,
	operation: React.PropTypes.string.isRequired,
	width: React.PropTypes.number.isRequired,
	height: React.PropTypes.number.isRequired,
	fillDest: React.PropTypes.string,
	fillSource: React.PropTypes.string,
};

OperationDemo.defaultProps = {
	fillDest: 'red',
	fillSource: 'blue',
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
