const React = require('react');

const createCanvas = (width, height) => {
	const canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;
	return canvas;
};

module.exports.createCanvas = createCanvas;

const getContext = (canvas) => (
	canvas.getContext('2d')
);

module.exports.getContext = getContext;

const canvas = (Component) => class CanvasHOC extends React.Component {
	constructor (props) {
		super(props);
		const { width, height } = props;
		const canvas = createCanvas(width, height);
		const context = getContext(canvas);
		this.state = { canvas, context };
	}

	render () {
		const { width, height, ...props } = this.props;
		const { canvas, context } = this.state;
		return <Component
			canvas={ canvas }
			context={ context }
			width={ width }
			height={ height }
			{ ...props }
		/>;
	}
};

module.exports.canvas = canvas;
