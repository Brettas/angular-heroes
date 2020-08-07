import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;
  protected routeSubcription: Subscription;
  formulario: FormGroup;
  active = '1';
  

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.routeSubcription =
      this.route.data.subscribe((
        data: { hero: Hero }) => this.hero = data.hero);

    this.formulario = this.formBuilder.group({
      id: [this.hero.id],
      name: [this.hero.name, Validators.required],
      skill: [this.hero.skills, Validators.required],
    });
  }

  goBack(): void {

    this.location.back();
  }
  
  save(): void{
    this.hero.name = this.formulario.get('name').value;
    this.hero.skills = this.formulario.get('skill').value;
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    
  }


}

