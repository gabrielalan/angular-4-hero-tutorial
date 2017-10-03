import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero, Address, states } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  loading = true;

  states = states;

  heroForm: FormGroup;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  save() {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

  goBack() {
    this.location.back();
  }

  createForm() {
    this.heroForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: this.formBuilder.group(new Address()),
      power: '',
      sidekick: ''
    });
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => {
        this.heroForm.patchValue({
          name: hero.name,
          address: hero.addresses[0] || new Address()
        });
        this.loading = false;
      });
  }
}
