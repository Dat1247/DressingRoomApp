import React from "react";

export default function NavPill(props) {
	return props.data.map((item, index) => {
		let activeClass = item.tabName === "tabTopClothes" ? "active" : "";
		return (
			<li className='nav-item text-center' role='presentation' key={index}>
				<a
					className={"nav-link " + activeClass}
					id={item.type}
					data-bs-toggle='tab'
					href={"#" + item.tabName}
					type='button'
					role='tab'
					aria-controls='home'
					aria-selected='true'>
					{item.showName}
				</a>
			</li>
		);
	});
}
