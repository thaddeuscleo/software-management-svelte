import { PUBLIC_GRAPHQL_ENDPOINT } from '$env/static/public';
import request, { gql } from 'graphql-request';

export async function load({ url }: { url: URL }) {
	const take = 10;

	const param = url.searchParams.get('currentPage');
	const currentPage = param === null || param <= '0' ? 1 : parseInt(param);
	const skip = (currentPage - 1) * take;

	const query = gql`
		query get_rooms($skip: Int!, $take: Int!) {
			rooms(skip: $skip, take: $take) {
				id
				roomNumber
			}
		}
	`;

	const { rooms } = await request(PUBLIC_GRAPHQL_ENDPOINT, query, {
		skip,
		take
	});

	const countQuery = gql`
		query get_room_count {
			roomCount
		}
	`;

	const { roomCount } = await request(PUBLIC_GRAPHQL_ENDPOINT, countQuery);

	const numberOfPage = Math.ceil(roomCount / take);

	return {
		rooms,
		roomCount,
		take,
		currentPage,
		numberOfPage
	};
}
