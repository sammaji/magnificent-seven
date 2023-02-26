import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { ROUTE_DATA } from '@data/routes.data';
import { CONTENT_DATA, type ContentType, type IndexedContentType } from '@data/content.data';

export const load = (({ params }: { params: { slug: string } }) => {
	// if  (`/${param.slug}` === route.route)

	for (let i = 0; i < 7; i++) {
		if (`/${params.slug}` === ROUTE_DATA[i].route) {
			const data: IndexedContentType = { ...CONTENT_DATA[i], index: i };
			data.index = i;
			return data;
		}
	}
	throw error(404, 'Not found');
}) satisfies PageLoad;
