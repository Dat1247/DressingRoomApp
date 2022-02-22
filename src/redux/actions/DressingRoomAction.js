import { CHOOSE_ITEM } from "../types/DressingRoomType";

export const chooseItemAction = (item) => ({
	type: CHOOSE_ITEM,
	item,
});
