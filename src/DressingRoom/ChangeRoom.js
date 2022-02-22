import React from "react";
import data from "./Data.json";
import NavPill from "./NavPill";
import TabPane from "./TabPane";

export default function ChangeRoom(props) {
	return (
		<>
			<div>
				<ul className='nav nav-tabs' id='myTab' role='tablist'>
					<NavPill data={data.navPills} />
				</ul>
				<div className='tab-content mt-3' id='myTabContent'>
					<TabPane data={data} />
				</div>
			</div>
		</>
	);
}
