import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Chicken } from './chicken';
import {Farm } from './farm'

@Injectable({
  providedIn: 'root'
})

export class ChickenSim {

  baseUrl: string = "https://localhost:44350/"
  constructor(private http: HttpClient) {
  }
  //concatonating / appending our Favorites into our base url
  getFarms(): any {
    return this.http.get<Farm[]>(this.baseUrl + 'Farm/all');
  }

  getChicken(baseUrl: string): any {
    let x: Chicken[] = [];
    this.http.get<Chicken[]>(this.baseUrl + 'api/chickens').subscribe(results => x = results);
    console.log(this.http.get<Chicken[]>(baseUrl + 'api/chickens'));
    return x;
  }
}
