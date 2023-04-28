export async function imageLoaded(url: string) {
	if(url) {
		const blob = await fetch(url).then((r) => r.blob());
		return blob.size > 0 ? true : false;
	}
	return false;
}
