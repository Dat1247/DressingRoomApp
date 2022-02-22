import React, { useEffect, useRef, memo } from "react";
import { animated, useSpring } from "react-spring";
function Shoes(props) {
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
				bottom: " -70%",
				right: "40%",
				transform: "scale(0.1)",
				opacity: 0,
				zIndex: "1",
			},
			to: {
				backgroundImage: `url(${props.item.imgSrc_png})`,
				width: "500px",
				height: "1000px",
				position: "absolute",
				bottom: " -37%",
				right: "-3.5%",
				transform: "scale(0.5)",
				opacity: 1,
				zIndex: "1",
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
				bottom: " -37%",
				right: "-3.5%",
				transform: "scale(0.5)",
				opacity: 1,
				zIndex: "1",
			},
			to: {
				backgroundImage: `url(${prevStateItem.imgSrc_png})`,
				width: "500px",
				height: "1000px",
				position: "absolute",
				bottom: " -70%",
				right: "-40%",
				transform: "scale(0.1)",
				opacity: 0,
				zIndex: "1",
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
			bottom: " -70%",
			right: "40%",
			transform: "scale(0.1)",
			opacity: 0,
			zIndex: "1",
		},
		to: {
			backgroundImage: `url(${props.item.imgSrc_png})`,
			width: "500px",
			height: "1000px",
			position: "absolute",
			bottom: " -37%",
			right: "-3.5%",
			transform: "scale(0.5)",
			opacity: 1,
			zIndex: "1",
		},
	});

	apiPrevStateUseSpring.start({
		from: {
			backgroundImage: `url(${prevStateItem.imgSrc_png})`,
			width: "500px",
			height: "1000px",
			position: "absolute",
			bottom: " -37%",
			right: "-3.5%",
			transform: "scale(0.5)",
			opacity: 1,
			zIndex: "1",
		},
		to: {
			backgroundImage: `url(${prevStateItem.imgSrc_png})`,
			width: "500px",
			height: "1000px",
			position: "absolute",
			bottom: " -70%",
			right: "-40%",
			transform: "scale(0.1)",
			opacity: 0,
			zIndex: "1",
		},
	});

	return (
		<div>
			<animated.div className='feet' style={currentState}></animated.div>
			<animated.div className='feet' style={prevStateUseSpring}></animated.div>
		</div>
	);
}

export default memo(Shoes);
