import React, { useEffect, useRef, memo } from "react";
import { useSpring, animated } from "react-spring";
function BikiniTop(props) {
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
				left: "-100%",
				backgroundImage: `url("${props.item.imgSrc_png}")`,
				width: "500px",
				height: "500px",
				top: "-9%",
				zIndex: "3",
				opacity: 0,
				transform: "scale(0.1)",
			},
			to: {
				left: "-5%",
				backgroundImage: `url("${props.item.imgSrc_png}")`,
				width: "500px",
				height: "500px",
				top: "-9%",
				zIndex: "3",
				opacity: 1,
				transform: "scale(0.5)",
			},
			config: { duration: 500 },
		};
	});
	const [prevStateUseSpring, apiPrevStateUseSpring] = useSpring(() => {
		return {
			from: {
				left: "-5%",
				backgroundImage: `url("${prevStateItem.imgSrc_png}")`,
				width: "500px",
				height: "500px",
				top: "-9%",
				zIndex: "3",
				opacity: 1,
				transform: "scale(0.5)",
			},
			to: {
				left: "45%",
				backgroundImage: `url("${prevStateItem.imgSrc_png}")`,
				width: "500px",
				height: "500px",
				top: "-9%",
				zIndex: "3",
				opacity: 0,
				transform: "scale(0.1)",
			},
			config: { duration: 500 },
		};
	});

	apiCurrentState.start({
		from: {
			left: "-50%",
			backgroundImage: `url("${props.item.imgSrc_png}")`,
			width: "500px",
			height: "500px",
			top: "-9%",
			zIndex: "3",
			opacity: 0,
			transform: "scale(0.1)",
		},
		to: {
			left: "-5%",
			backgroundImage: `url("${props.item.imgSrc_png}")`,
			width: "500px",
			height: "500px",
			top: "-9%",
			zIndex: "3",
			opacity: 1,
			transform: "scale(0.5)",
		},
	});
	apiPrevStateUseSpring.start({
		from: {
			left: "-5%",
			backgroundImage: `url("${prevStateItem.imgSrc_png}")`,
			width: "500px",
			height: "500px",
			top: "-9%",
			zIndex: "3",
			opacity: 1,
			transform: "scale(0.5)",
		},
		to: {
			left: "45%",
			backgroundImage: `url("${prevStateItem.imgSrc_png}")`,
			width: "500px",
			height: "500px",
			top: "-9%",
			zIndex: "3",
			opacity: 0,
			transform: "scale(0.1)",
		},
	});

	return (
		<div>
			<animated.div className='bikinitop' style={currentState}></animated.div>
			<animated.div
				className='bikinitop'
				style={prevStateUseSpring}></animated.div>
		</div>
	);
}

export default memo(BikiniTop);
