export type Item = {
	id: number;
	title: string;
	route: string;
}

export type MenuItem = Item;

export type PageItem = Item & {
	content: string;
}
