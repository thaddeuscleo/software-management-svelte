import { PUBLIC_GRAPHQL_ENDPOINT } from '$env/static/public';
import { gql, request } from 'graphql-request';

export async function load({ url }: { url: any }) {
	const take = 10;

	let param = url.searchParams.get('currentPage');
	let currentPage = param === null || param <= 0 ? 1 : parseInt(param);
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

	return {
		softwares,
		softwareCount: await request(PUBLIC_GRAPHQL_ENDPOINT, countQuery, variables),
		currentPage,
		take
	};
}
