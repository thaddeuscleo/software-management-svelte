import type { Software } from './software';

export interface Room {
	id: string;
	roomNumber: string;
	softwares: Software[];
}
