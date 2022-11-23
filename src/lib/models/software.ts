import type { Room } from './room';

export interface Software {
	id: string;
	softwareName: string;
	installerPath: string;
	group: string;
	license: boolean;
	currentLicense: string;
	note: string;
	rooms: Room[];
}
