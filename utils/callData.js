function callData() {
	this.getListData = () => {
		return $.getJSON("../data/Data.json");
	};
}
