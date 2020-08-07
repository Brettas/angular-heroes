import {ReversePipe} from 'ngx-pipes';
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeroService } from '../hero.service';

@Component({
  templateUrl:'./reverse.html',
  styleUrls: ['./reverse.css'],
  providers: [ReversePipe]
})
export class ReverseComponent implements OnInit{
  @Input()
  protected routeSubcription: Subscription;

  
  active = '2';
  heroes: Hero[];
  filter: string = '';

  constructor(
    private reversePipe: ReversePipe, private heroService: HeroService) {
    this.reversePipe.transform('hero'); 
  }
  
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

}
  
  
