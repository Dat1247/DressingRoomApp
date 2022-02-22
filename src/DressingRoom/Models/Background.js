import React, { memo } from "react";
import { animated, useSpring } from "react-spring";

function Background(props) {
	const [currentState, apiCurrentState] = useSpring(() => {
		return {
			from: {
				opacity: 0,
				backgroundImage: `url('${props.item.imgSrc_png}')`,
			},
			to: {
				opacity: 1,
				backgroundImage: `url('${props.item.imgSrc_png}')`,
			},
			config: { duration: 500 },
		};
	});

	apiCurrentState.start({
		from: {
			opacity: 0,
			backgroundImage: `url('${props.item.imgSrc_png}')`,
		},
		to: {
			opacity: 1,
			backgroundImage: `url('${props.item.imgSrc_png}')`,
		},
	});
	return (
		<animated.div className='background' style={currentState}></animated.div>
	);
}

export default memo(Background);
