import React, { memo } from "react";
import { animated, useSpring } from "react-spring";

function Hairstyle(props) {
	const [currentState, apiCurrentState] = useSpring(() => {
		return {
			from: {
				backgroundImage: `url(${props.item.imgSrc_png})`,
				width: "1000px",
				height: "1000px",
				position: "absolute",
				top: "-75%",
				right: " -57%",
				transform: "scale(0.05)",
				zIndex: " 4",
				opacity: 0,
			},
			to: {
				backgroundImage: `url(${props.item.imgSrc_png})`,
				width: "1000px",
				height: "1000px",
				position: "absolute",
				top: "-75%",
				right: " -57%",
				transform: "scale(0.15)",
				zIndex: " 4",
				opacity: 1,
			},
			config: { duration: 500 },
		};
	});

	apiCurrentState.start({
		from: {
			backgroundImage: `url(${props.item.imgSrc_png})`,
			width: "1000px",
			height: "1000px",
			position: "absolute",
			top: "-75%",
			right: " -57%",
			transform: "scale(0.15)",
			zIndex: " 4",
			opacity: 0,
		},
		to: {
			backgroundImage: `url(${props.item.imgSrc_png})`,
			width: "1000px",
			height: "1000px",
			position: "absolute",
			top: "-75%",
			right: " -57%",
			transform: "scale(0.15)",
			zIndex: " 4",
			opacity: 1,
		},
	});

	return (
		<animated.div className='hairstyle' style={currentState}></animated.div>
	);
}

export default memo(Hairstyle);
