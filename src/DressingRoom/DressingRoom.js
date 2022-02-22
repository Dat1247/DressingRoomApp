import React from "react";
import "./DressingRoom.css";

import ChangeRoom from "./ChangeRoom";
import Model from "./Model";

export default function DressingRoom(props) {
	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col-12 title'>
					<div className='py-5 text-center'>
						<h2>Dressing Room</h2>
					</div>
				</div>
			</div>
			<div className='row mt-3'>
				<div className='col-8'>
					<ChangeRoom />
				</div>
				<div className='col-4 mt-5'>
					<Model />
				</div>
			</div>
		</div>
	);
}
