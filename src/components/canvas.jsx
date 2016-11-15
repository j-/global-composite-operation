const React = require('react');

const createCanvas = () => (
	document.createElement('canvas')
);

module.exports.createCanvas = createCanvas;

const getContext = (canvas) => (
	canvas.getContext('2d')
);

module.exports.getContext = getContext;

const canvas = (Component) => ({ ...props }) => {
	const canvas = createCanvas();
	const context = getContext(canvas);
	return <Component
		canvas={ canvas }
		context={ context }
		{ ...props }
	/>;
};

module.exports.canvas = canvas;
