export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;
	// dangerous: boolean = false;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
	isSpaceDebris(testSatellite: object): {
		// if (testSatellite[type] = "Space Debris"){
		// 	this.dangerous = true;
		// }
	}
}

// TODO 3a: fix isSpaceDebris check
