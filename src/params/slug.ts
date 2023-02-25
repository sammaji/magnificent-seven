import { ROUTE_DATA } from '@data/routes.data';
import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param) => {
	return ROUTE_DATA.some((route) => {
		// console.log(`/${param}` === route.route)
		return `/${param}` === route.route;
	});
}) satisfies ParamMatcher;
