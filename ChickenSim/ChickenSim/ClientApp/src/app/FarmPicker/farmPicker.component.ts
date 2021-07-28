import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { chickenAPI } from "../../chickenAPIservice";
import { Farm } from "../farm";

@Component({
  selector: 'farm-picker',
  templateUrl: 'farm-picker.component.html',
  providers: [chickenAPI]
})

export class FarmPickerComponent {
  farms: Farm[] = [];

  constructor(private api: chickenAPI)
  {
    api.getFarms().subscribe(
      (farms) => {
        for (let i = 0; i < farms.length; i++) {
          let farm = farms[i];
          let f: Farm = { name: farm.name, seeds: farm.seeds, id: farm.id }
          console.log(farms[i])
          this.farms.push(f);
        }
      }
    );
  }

  addFarm(form: NgForm) {
    //this will add it to the front end array
    let farmName: string = form.form.value.Name;
    let f: Farm = { id: 0, name: farmName, seeds: 100 };
    this.farms.push(f);

    //this will add the farm to the database
    //we will need to add an addFarm method in service
    this.api.addFarm(farmName);
  }
}
