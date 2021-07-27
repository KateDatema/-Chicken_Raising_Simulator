import { Component, Inject } from '@angular/core';
import { Chicken } from '../chicken';
import { ChickenSim } from '../ChickenSimService';
import { Farm } from '../farm';

@Component({
    selector: 'app-chicken',
    templateUrl: './chicken.component.html',
    styleUrls: ['./chicken.component.css'],
    providers: [ChickenSim]
})
/** Chicken component*/
export class ChickenComponent {
  allChickens: Chicken[] = [];
  allFarms: Farm[] = [];
  /** Chicken ctor */
  constructor(private ChickenSimService: ChickenSim) {
    this.allChickens = this.ChickenSimService.getChicken("https://localhost:44350/");
    console.log(this.allChickens);
    }
}
