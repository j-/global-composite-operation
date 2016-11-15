const React = require('react');
const { canvas } = require('./canvas');

const TWOPI = Math.PI * 2;

class OperationDemo extends React.Component {
	constructor (props) {
		super(props);
		this.animationFrame = null;
		this.renderCanvas = this.renderCanvas.bind(this);
	}

	addCanvasToElement () {
		const element = this.refs.root;
		if (!element) {
			return;
		}
		const { canvas } = this.props;
		element.appendChild(canvas);
	}

	componentDidMount () {
		this.startAnimationLoop();
	}

	componentWillUnmount () {
		this.stopAnimationLoop();
	}

	componentDidMount () {
		this.addCanvasToElement();
		this.renderCanvas();
	}

	componentWillUpdate () {
		this.renderCanvas();
	}

	startAnimationLoop () {
		this.renderCanvas(0);
		this.animationFrame = window.requestAnimationFrame(this.renderCanvas);
	}

	stopAnimationLoop () {
		window.cancelAnimationFrame(this.renderCanvas);
	}

	renderCanvas (t) {
		if (!this.refs.root) {
			return;
		}
		this.draw(this.props.context, this.props.operation, t);
		this.animationFrame = window.requestAnimationFrame(this.renderCanvas);
	}

	draw (ctx, operation, t) {
		const { width, height, fillDest, fillSource, period } = this.props;
		ctx.save();
		ctx.clearRect(0, 0, width, height);
		ctx.globalCompositeOperation = operation;
		ctx.fillStyle = fillDest;
		ctx.fillRect(0, 0, width * 0.75, height * 0.75);
		ctx.fillStyle = fillSource;
		const value = (t % period) / period;
		const degrees = value * TWOPI;
		ctx.fillRect(
			width * (Math.sin(degrees) * 0.125 + 0.125),
			height * (Math.cos(degrees) * 0.125 + 0.125),
			width * 0.75,
			height * 0.75
		);
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
			period,
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
	period: React.PropTypes.number,
};

OperationDemo.defaultProps = {
	fillDest: 'red',
	fillSource: 'blue',
	period: 2000,
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
