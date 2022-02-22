import { CHOOSE_ITEM } from "../types/DressingRoomType";

const stateDefault = {
	bikiniTop: {},
	bikiniBottom: {},
	shoes: {},
	handBag: {},
	necklace: {},
	hairstyle: {},
	background: {
		id: "background_3",
		type: "background",
		name: "Background 3",
		desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
		imgSrc_jpg: "./images/background/background3_show.jpg",
		imgSrc_png: "./images/background/background3.jpg",
	},
};

export const DressingRoomReducer = (state = stateDefault, action) => {
	switch (action.type) {
		case CHOOSE_ITEM: {
			const item = action.item;
			switch (item.type) {
				case "topclothes": {
					return { ...state, bikiniTop: item };
				}
				case "botclothes": {
					return { ...state, bikiniBottom: item };
				}
				case "shoes": {
					return { ...state, shoes: item };
				}
				case "handbags": {
					return { ...state, handBag: item };
				}
				case "necklaces": {
					return { ...state, necklace: item };
				}
				case "hairstyle": {
					return { ...state, hairstyle: item };
				}
				default:
					return { ...state, background: item };
			}
		}
		default:
			return { ...state };
	}
};
