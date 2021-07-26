import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Chicken } from './chicken';
import {Farm } from './farm'

@Injectable({
  providedIn: 'root'
})

export class FarmService {
  constructor(private http: HttpClient) {
  }
  //concatonating / appending our Favorites into our base url
  getFarms(@Inject('BASE_URL') baseUrl: string): any {
    return this.http.get<Farm[]>(baseUrl + 'Farm/all');
  }

  getChicken(@Inject('BASE_URL') baseUrl: string): any {
    return this.http.get<Chicken[]>(baseUrl + 'Farm/all');
  }
}
