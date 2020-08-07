
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, Subscription } from "rxjs";

import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Injectable({ providedIn: 'root' })
export class HeroResolver implements  Resolve<Observable<Hero>> {
  protected routeSubcription: Subscription;
  route: ActivatedRouteSnapshot;
  hero: Hero;
  
  constructor(private service: HeroService) {}
  
  ngOnInit(): void {
    this.routeSubcription = this.route.data.subscribe((data: {hero: Hero}) => this.hero = data.hero);
  }

  resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<Hero>{
    return this.service.getHero(+route.paramMap.get('id'));
  }

}

