import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroResolver } from './heroes/heroes.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  { path: 'home', 
  component: HomeComponent},

  { path: 'detail/:id', 
  component: HeroDetailComponent, 
  resolve: {
    hero: HeroResolver
  }
},
  { path: 'heroes', 
  component: HeroesComponent, },

]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}