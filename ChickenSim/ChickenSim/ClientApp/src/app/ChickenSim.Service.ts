import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Chicken } from './chicken';
import {Farm } from './farm'

@Injectable({
  providedIn: 'root'
})

export class ChickenSim {
  constructor(private http: HttpClient) {
  }
  //concatonating / appending our Favorites into our base url
  getFarms(@Inject('BASE_URL') baseUrl: string): any {
    return this.http.get<Farm[]>(baseUrl + 'Farm/all');
  }

  getChicken(@Inject('BASE_URL') baseUrl: string): any {
    let x: Chicken[] = [];
    this.http.get<Chicken[]>(baseUrl + 'api/chickens').subscribe(results => x = results);
    console.log(this.http.get<Chicken[]>(baseUrl + 'api/chickens'));
    return x;
  }
}
