import { PUBLIC_GRAPHQL_ENDPOINT } from '$env/static/public';
import { gql, request } from 'graphql-request';

export async function load({ url }: { url: any }) {
	const take = 10;

	let currentPage = parseInt(url.searchParams.get('currentPage'));
	currentPage = url.searchParams.get('currentPage') === undefined ? 1 : currentPage;
	const skip = (currentPage - 1) * take;

	const query = gql`
		query Softwares($skip: Int, $take: Int) {
			softwares(skip: $skip, take: $take) {
				currentLicense
				group
				id
				installerPath
				license
				note
				numberOfLicense
				softwareName
				version
			}
		}
	`;

	const variables = {
		skip,
		take
	};

	const countQuery = gql`
		query get_software_count {
			softwareCount
		}
	`;

	const softwares = await request(PUBLIC_GRAPHQL_ENDPOINT, query, variables);

	// console.log(softwares);
	return {
		softwares,
		softwareCount: await request(PUBLIC_GRAPHQL_ENDPOINT, countQuery, variables),
		currentPage,
		take
	};
}
