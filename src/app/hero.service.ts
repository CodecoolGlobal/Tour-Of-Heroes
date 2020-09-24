import { Injectable } from '@angular/core';
import {Hero} from './heroes/model/hero';
import {HEROES} from './test/mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add(`HeroSerice: Fetched Heroes`);
    return of(HEROES);
  }

}
