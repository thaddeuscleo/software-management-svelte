import { PUBLIC_GRAPHQL_ENDPOINT } from '$env/static/public';
import request, { gql } from 'graphql-request';

export async function load({
	params
}: {
	params: {
		id: number;
	};
}) {
	const query = gql`
		query get_room($id: String!) {
			room(id: $id) {
				roomNumber
				softwares {
					softwareName
				}
			}
		}
	`;

	const { room } = await request(PUBLIC_GRAPHQL_ENDPOINT, query, {
		id: params.id
	});

	return {
		room
	};
}
