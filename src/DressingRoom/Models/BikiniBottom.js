import React, { useEffect, useRef, memo } from "react";
import { animated, useSpring } from "react-spring";

function BikiniBottom(props) {
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
				top: "-30%",
				left: "-100%",
				zIndex: "2",
				transform: "scale(0.1)",
				opacity: 0,
			},
			to: {
				backgroundImage: `url(${props.item.imgSrc_png})`,
				width: "500px",
				height: "1000px",
				top: "-30%",
				left: "-5%",
				zIndex: "2",
				transform: "scale(0.5)",
				opacity: 1,
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
				top: "-30%",
				left: "-5%",
				zIndex: "2",
				transform: "scale(0.5)",
				opacity: 1,
			},
			to: {
				backgroundImage: `url(${prevStateItem.imgSrc_png})`,
				width: "500px",
				height: "1000px",
				top: "-30%",
				left: "45%",
				zIndex: "2",
				transform: "scale(0.1)",
				opacity: 0,
			},
			config: { duration: 500 },
		};
	});

	apiCurrentState.start({
		from: {
			backgroundImage: `url(${props.item.imgSrc_png})`,
			width: "500px",
			height: "1000px",
			top: "-30%",
			left: "-100%",
			zIndex: "2",
			transform: "scale(0.1)",
			opacity: 0,
		},
		to: {
			backgroundImage: `url(${props.item.imgSrc_png})`,
			width: "500px",
			height: "1000px",
			top: "-30%",
			left: "-5%",
			zIndex: "2",
			transform: "scale(0.5)",
			opacity: 1,
		},
	});
	apiPrevStateUseSpring.start({
		from: {
			backgroundImage: `url(${prevStateItem.imgSrc_png})`,
			width: "500px",
			height: "1000px",
			top: "-30%",
			left: "-5%",
			zIndex: "2",
			transform: "scale(0.5)",
			opacity: 1,
		},
		to: {
			backgroundImage: `url(${prevStateItem.imgSrc_png})`,
			width: "500px",
			height: "1000px",
			top: "-30%",
			left: "45%",
			zIndex: "2",
			transform: "scale(0.1)",
			opacity: 0,
		},
	});

	return (
		<div>
			<animated.div
				className='bikinibottom'
				style={currentState}></animated.div>
			<animated.div
				className='bikinibottom'
				style={prevStateUseSpring}></animated.div>
		</div>
	);
}

export default memo(BikiniBottom);
