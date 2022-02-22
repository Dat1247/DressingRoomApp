import React from "react";
import ItemSanPham from "./ItemSanPham";

export default function TabPane(props) {
	const data = props.data;

	const renderItemsTabName = (type, tabPanes) => {
		let arrItems = tabPanes.filter((item) => item.type === type);
		return arrItems.map((item, index) => {
			return (
				<div className='col-md-3' key={index}>
					<ItemSanPham item={item} />
				</div>
			);
		});
	};

	return data.navPills.map((item, index) => {
		let activeClass = item.tabName === "tabTopClothes" ? "show active" : "";
		return (
			<div
				className={"tab-pane fade " + activeClass}
				id={item.tabName}
				role='tabpanel'
				key={index}
				aria-labelledby='home-tab'>
				<div className='row'>
					{renderItemsTabName(item.type, data.tabPanes)}
				</div>
			</div>
		);
	});
}
