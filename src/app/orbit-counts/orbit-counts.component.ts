import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  countByType(type: string): number {
	let count = 0;
	console.log(type);
	if (this.satellites) {
	  for (let i = 0; i < this.satellites.length; i++) {
		 if (this.satellites[i].type === type) {
			console.log(this.satellites[i].type)
			console.log(type)
			console.log(this.satellites[i].type === type)
			count++;
		 } else {
			console.log(this.satellites[i].type)
			console.log(type)
			console.log(this.satellites[i].type === type)
		 }
	  }
	}
	return count;
 }


}