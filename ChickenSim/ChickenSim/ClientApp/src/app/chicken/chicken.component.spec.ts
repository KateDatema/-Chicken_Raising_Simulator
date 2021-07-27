/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ChickenComponent } from './chicken.component';

let component: ChickenComponent;
let fixture: ComponentFixture<ChickenComponent>;

describe('Chicken component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ChickenComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ChickenComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});