import { Injectable } from '@angular/core';
import {Hero} from './heroes/model/hero';
import {HEROES} from './test/mock-heroes';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]>{
    return of(HEROES);
  }

}
