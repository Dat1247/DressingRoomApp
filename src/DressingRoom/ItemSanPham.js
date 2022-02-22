import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";
import { chooseItemAction } from "../redux/actions/DressingRoomAction";

export default function ItemSanPham(props) {
	const dispatch = useDispatch();
	const [state, setState] = useState(true);
	const { x } = useSpring({
		from: { x: 0 },
		x: state ? 1 : 0,
		config: { duration: 500 },
	});
	const item = props.item;
	return (
		<div className='card text-center mb-3'>
			<img src={item.imgSrc_jpg} alt={item.name} />
			<h4
				style={{
					margin: "10px auto",
					fontSize: "16px",
					fontWeight: "bold",
				}}>
				{item.name}
			</h4>
			<animated.button
				style={{
					scale: x.to({
						range: [0, 0.25, 0.4, 0.5, 0.6, 0.75, 1],
						output: [1, 0.9, 0.97, 1.2, 0.97, 0.9, 1],
					}),
				}}
				onClick={() => {
					setState(!state);
					dispatch(chooseItemAction(item));
				}}
				className='btn btn-success fw-bold'>
				Thử đồ
			</animated.button>
		</div>
	);
}
