export type SiteSettings = {
	logo: {
		url: string;
		alt: string;
	};
	social_links: any[]
}

export type Item = {
	id: number;
	title: string;
	route: string;
}

export type MenuItem = Item;

export type PageItem = Item & {
	content: any;
}
