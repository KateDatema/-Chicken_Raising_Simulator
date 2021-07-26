import { Component, Inject, Injectable } from "@angular/core";
import { ChickenSim } from '../ChickenSim.Service';
import { Chicken } from '../chicken';
import { Farm } from '../farm';



@Component({
  selector: 'app-chicken-menu',
  templateUrl: './chicken.component.html',
  //styleUrls: ['./product-menu.component.css'],
  providers: [ChickenSim]
})

export class ChickenComponent {
  allChickens: Chicken[] = [];
  allFarms: Farm[] = [];

  constructor(private ChickenSimService: ChickenSim, @Inject('BASE_URL') baseUrl: string) {
    this.allChickens = this.ChickenSimService.getChicken(baseUrl);
    console.log(this.allChickens);
  }
}
