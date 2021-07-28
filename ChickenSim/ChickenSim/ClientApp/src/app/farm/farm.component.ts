import { Component, Input } from "@angular/core";
import { chickenAPI } from "../../chickenAPIservice";
import { Chicken } from "../chicken";
import { Farm } from "../farm";

@Component({
  templateUrl: 'farm.component.html',
  selector: 'farm',
  styleUrls: ['./farm.css'],
  providers: [chickenAPI]
})

export class FarmComponent {
  @Input() id: number = 1;
  farm: Farm = null;
  chickens: Chicken[] = [];

  constructor(private api: chickenAPI) {
    this.api.getFarm(this.id).subscribe(result => {
      console.log(result);
      this.farm = result;
      //this api call should run once a farm is loaded
      this.api.getChickensByFarm(this.id).subscribe((chickens) => {
        this.chickens = chickens;
        console.log(chickens);
      });
    });
  }

  FarmSeeds() {
    let id = this.farm.id;

      this.api.changeSeeds(id, 1).subscribe(() => {
      this.farm.seeds += 1;
    });
  }

  Feed(farmId: number, idChicken: number) {
    if (this.farm.seeds > 0) {
      //this.api.changeSeeds(id, -1).subscribe(() => {
      //  //now we want a method that increases the chickens stats

      //});

      this.api.feedChicken(farmId, idChicken).subscribe(() => {
        this.farm.seeds--;
        for (let i = 0; i < this.chickens.length; i++) {
          let c = this.chickens[i];
          if (c.id == idChicken) {
            c.smarts++;
            c.strength++;
            c.speed++;
            c.luck++;
          }
        }
      });
    }
  }
}
