import React, { useEffect, useRef, memo } from "react";
import { animated, useSpring } from "react-spring";

function Necklace(props) {
	const usePrevious = (value) => {
		const ref = useRef();
		useEffect(() => {
			ref.current = value;
		});
		return ref.current;
	};
	const prevState = usePrevious({ ...props.item });
	let prevStateItem = prevState === undefined ? "" : prevState;

	const [currentState, apiCurrentState] = useSpring(() => {
		return {
			from: {
				backgroundImage: `url(${props.item.imgSrc_png})`,
				width: "500px",
				height: "1000px",
				position: "absolute",
				bottom: "-10%",
				right: " 40%",
				transform: "scale(0.1)",
				opacity: 1,
				zIndex: "4",
			},
			to: {
				backgroundImage: `url(${props.item.imgSrc_png})`,
				width: "500px",
				height: "1000px",
				position: "absolute",
				bottom: "-40%",
				right: " -3.5%",
				transform: "scale(0.5)",
				opacity: 1,
				zIndex: "4",
			},
			config: { duration: 500 },
		};
	});

	const [prevStateUseSpring, apiPrevStateUseSpring] = useSpring(() => {
		return {
			from: {
				backgroundImage: `url(${prevStateItem.imgSrc_png})`,
				width: "500px",
				height: "1000px",
				position: "absolute",
				bottom: "-40%",
				right: " -3.5%",
				transform: "scale(0.5)",
				opacity: 1,
				zIndex: "4",
			},
			to: {
				backgroundImage: `url(${prevStateItem.imgSrc_png})`,
				width: "500px",
				height: "1000px",
				position: "absolute",
				bottom: "-10%",
				right: " -50%",
				transform: "scale(0.1)",
				opacity: 0,
				zIndex: "4",
			},
			config: { duration: 500 },
		};
	});

	apiCurrentState.start({
		from: {
			backgroundImage: `url(${props.item.imgSrc_png})`,
			width: "500px",
			height: "1000px",
			position: "absolute",
			bottom: "-10%",
			right: " 40%",
			transform: "scale(0.1)",
			opacity: 1,
			zIndex: "4",
		},
		to: {
			backgroundImage: `url(${props.item.imgSrc_png})`,
			width: "500px",
			height: "1000px",
			position: "absolute",
			bottom: "-40%",
			right: " -3.5%",
			transform: "scale(0.5)",
			opacity: 1,
			zIndex: "4",
		},
	});

	apiPrevStateUseSpring.start({
		from: {
			backgroundImage: `url(${prevStateItem.imgSrc_png})`,
			width: "500px",
			height: "1000px",
			position: "absolute",
			bottom: "-40%",
			right: " -3.5%",
			transform: "scale(0.5)",
			opacity: 1,
			zIndex: "4",
		},
		to: {
			backgroundImage: `url(${prevStateItem.imgSrc_png})`,
			width: "500px",
			height: "1000px",
			position: "absolute",
			bottom: "-10%",
			right: " -50%",
			transform: "scale(0.1)",
			opacity: 0,
			zIndex: "4",
		},
	});

	const itemCSS = {
		backgroundImage: `url(${props.item.imgSrc_png})`,
		width: "500px",
		height: "1000px",
		position: "absolute",
		bottom: "-40%",
		right: " -3.5%",
		transform: "scale(0.5)",
		opacity: 1,
		zIndex: "4",
	};
	return (
		<div>
			<animated.div className='necklace' style={currentState}></animated.div>
			<animated.div
				className='necklace'
				style={prevStateUseSpring}></animated.div>
		</div>
	);
}

export default memo(Necklace);
