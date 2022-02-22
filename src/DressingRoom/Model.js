import React from "react";
import { useSelector } from "react-redux";
import BikiniTop from "./Models/BikiniTop";
import BikiniBottom from "./Models/BikiniBottom";
import Shoes from "./Models/Shoes";
import Handbag from "./Models/Handbag";
import Necklace from "./Models/Necklace";
import Hairstyle from "./Models/Hairstyle";
import Background from "./Models/Background";

export default function Model(props) {
	const {
		bikiniTop,
		bikiniBottom,
		shoes,
		handBag,
		necklace,
		hairstyle,
		background,
	} = useSelector((state) => state.DressingRoomReducer);

	return (
		<div className='contain'>
			<div
				className='body'
				style={{
					backgroundImage: "url('./images/allbody/bodynew.png')",
				}}></div>
			<div
				className='model'
				style={{
					backgroundImage: "url('./images/model/1000new.png')",
				}}></div>
			<div
				className='bikinitop'
				style={{
					backgroundImage: "url('./images/allbody/bikini_branew.png')",
				}}></div>
			<div
				className='bikinibottom'
				style={{
					backgroundImage: "url('./images/allbody/bikini_pantsnew.png')",
				}}></div>

			<BikiniTop item={bikiniTop} />
			<BikiniBottom item={bikiniBottom} />
			<Shoes item={shoes} />
			<Handbag item={handBag} />
			<Necklace item={necklace} />
			<Hairstyle item={hairstyle} />
			<Background item={background} />
		</div>
	);
}
