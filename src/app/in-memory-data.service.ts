import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
     const heroes = [
      { id: 1, name: 'Super Homem', skills:'Super-força'},
      { id: 2, name: 'Flash', skills:'Super velocidade'},
      { id: 3, name: 'Bombasto', skills:'Sopro congelante'},
      { id: 4, name: 'Celeritas', skills:'Super Sentidos' },
      { id: 5, name: 'Magneta',skills:'Super agilidade'},
      { id: 6, name: 'RubberMan',skills:'Voo' },
      { id: 7, name: 'Dynama',skills:'Super-força' },
      { id: 8, name: 'Dr IQ',skills:'Super Inteligencia' },
      { id: 9, name: 'Magma', skills:'Fogo' },
      { id: 10, name: 'Tornado',skills:'Tornado' }
    ];
    return {heroes};
  }

  
  getId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}