import { PUBLIC_GRAPHQL_ENDPOINT } from '$env/static/public';
import request, { gql } from 'graphql-request';

export async function load({ params }: { params: any }) {
	const query = gql`
		query get_software($id: String!) {
			software(id: $id) {
				currentLicense
				group
				id
				installerPath
				license
				note
				numberOfLicense
				softwareName
				version
				rooms {
					id
					roomNumber
				}
			}
		}
	`;

	const software = await request(PUBLIC_GRAPHQL_ENDPOINT, query, {
		id: params.id
	});

	return {
		software
	};
}
