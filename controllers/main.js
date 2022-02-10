let data = new callData();
let listChosen = new ListChosen();

const getDom = (selector) => {
	return document.querySelector(selector);
};

const renderNavPill = (item, activeClass) => {
	return `
        <li class="nav-item" role="presentation">
            <a class="nav-link ${activeClass}" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#${item.tabName}" type="button" role="tab" aria-controls="pills-home" aria-selected="true">${item.showName}</a>
        </li>
    `;
};

const typeArr = (type, data) => {
	let tempArr = [];
	data.forEach((item, index) => {
		if (item.type === type) {
			tempArr.push(item);
		}
	});
	return tempArr;
};

const renderItemTabPane = (arr) => {
	return arr.reduce((content, item, index) => {
		content += `
            <div class='col-md-3'>
                <div class='card text-center'>
                    <img src=${item.imgSrc_jpg} >
                    <h4>
                        <b>${item.name}</b>
                    </h4>
                    <button  data-id=${item.id} data-name=${item.name} data-desc=${item.desc} data-type=${item.type} data-imgSrcJpg=${item.imgSrc_jpg} data-imgSrcPng=${item.imgSrc_png} onclick='changeType(event)'>Thử đồ</button>
                </div>
            </div>
        `;
		return content;
	}, "");
};

const findIndex = (type) => {
	let index = -1;

	if (listChosen.list && listChosen.list.length > 0) {
		listChosen.list.forEach((item, i) => {
			if (item.type === type) {
				index = i;
			}
		});
	}

	return index;
};

const changeType = (e) => {
	let id = e.target.getAttribute("data-id");
	let name = e.target.getAttribute("data-name");
	let desc = e.target.getAttribute("data-desc");
	let type = e.target.getAttribute("data-type");
	let imgSrcJpg = e.target.getAttribute("data-imgSrcJpg");
	let imgSrcPng = e.target.getAttribute("data-imgSrcPng");

	let choseItem = new ChoseItem(id, name, type, desc, imgSrcJpg, imgSrcPng);

	let index = findIndex(choseItem.type);
	if (index === -1) {
		listChosen.addItem(choseItem);
	} else {
		listChosen.list[index] = choseItem;
	}

	renderItem(listChosen.list);
};

const renderItem = (arr) => {
	if (arr && arr.length > 0) {
		arr.forEach((item) => {
			switch (item.type) {
				case "topclothes":
					renderItemImg(
						item.imgSrc_png,
						"500px",
						"500px",
						3,
						"scale(0.5)",
						"-9%",
						"-5%",
						".bikinitop"
					);
					break;
				case "botclothes":
					renderItemImg(
						item.imgSrc_png,
						"500px",
						"1000px",
						2,
						"scale(0.5)",
						"-30%",
						"-5%",
						".bikinibottom"
					);
					break;
				case "shoes":
					renderItemImg(
						item.imgSrc_png,
						"500px",
						"1000px",
						1,
						"scale(0.5)",
						"-37%",
						"-5%",
						".feet"
					);
					break;
				case "handbags":
					renderItemImg(
						item.imgSrc_png,
						"500px",
						"1000px",
						4,
						"scale(0.5)",
						"-31%",
						"-7%",
						".handbag"
					);
					break;
				case "necklaces":
					renderItemImg(
						item.imgSrc_png,
						"500px",
						"1000px",
						4,
						"scale(0.5)",
						"-30%",
						"-5%",
						".necklace"
					);
					break;
				case "hairstyle":
					renderItemImg(
						item.imgSrc_png,
						"1000px",
						"1000px",
						4,
						"scale(0.15)",
						"-75%",
						"-60%",
						".hairstyle"
					);
					break;
				default:
					getDom(
						".background"
					).style.backgroundImage = `url(${item.imgSrc_png})`;
					break;
			}
		});
	}
};

const renderItemImg = (
	img,
	width,
	height,
	zIndex,
	transform,
	top,
	left,
	selector
) => {
	getDom(selector).style.width = width;
	getDom(selector).style.height = height;
	getDom(selector).style.background = `url(${img})`;
	getDom(selector).style.zIndex = zIndex;
	getDom(selector).style.transform = transform;
	getDom(selector).style.top = top;
	getDom(selector).style.left = left;
};

const renderTabPane = (tabname, data) => {
	let tempArr = null;
	let elmItem = null;

	switch (tabname) {
		case "tabTopClothes":
			tempArr = typeArr("topclothes", data);

			elmItem = renderItemTabPane(tempArr);
			break;
		case "tabBotClothes":
			tempArr = typeArr("botclothes", data);
			elmItem = renderItemTabPane(tempArr);
			break;
		case "tabShoes":
			tempArr = typeArr("shoes", data);
			elmItem = renderItemTabPane(tempArr);
			break;
		case "tabHandBags":
			tempArr = typeArr("handbags", data);
			elmItem = renderItemTabPane(tempArr);
			break;
		case "tabNecklaces":
			tempArr = typeArr("necklaces", data);
			elmItem = renderItemTabPane(tempArr);
			break;
		case "tabHairStyle":
			tempArr = typeArr("hairstyle", data);
			elmItem = renderItemTabPane(tempArr);
			break;
		default:
			tempArr = typeArr("background", data);
			elmItem = renderItemTabPane(tempArr);
			break;
	}

	return elmItem;
};

const renderData = () => {
	data
		.getListData()
		.done(function (result) {
			let contentNavPills = "";
			let contentTabPane = "";
			result.navPills.forEach((item, index) => {
				let activeClass = item.tabName === "tabTopClothes" ? "active" : "";
				let fadeClass = item.tabName !== "tabTopClothes" ? "fade" : "";

				contentNavPills += renderNavPill(item, activeClass);

				contentTabPane += `
                    <div class="tab-pane ${fadeClass} container show ${activeClass}" id=${
					item.tabName
				} role="tabpanel" aria-labelledby="pills-home-tab">
                        <div class='row'>
                            ${renderTabPane(item.tabName, result.tabPanes)}
                        </div>
                    </div>
                `;
			});
			getDom(".nav-pills").innerHTML = contentNavPills;
			getDom(".tab-content").innerHTML = contentTabPane;
		})
		.fail((err) => {
			console.log(err);
		});
};

renderData();
