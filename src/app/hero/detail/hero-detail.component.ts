import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    this.heroService.update(this.prepareToSave())
      .then(() => this.goBack());
  }

  goBack() {
    this.location.back();
  }

  createForm() {
    this.heroForm = this.formBuilder.group({
      name: ['', Validators.required],
      secretLairs: this.formBuilder.array([]),
      power: '',
      sidekick: ''
    });
  }

  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  }

  addLair() {
    this.secretLairs.push(this.formBuilder.group(new Address()));
  }

  prepareToSave(): Hero {
    const model = this.heroForm.value;
    const lairs: Address[] = model.secretLairs.map(address => Object.assign({}, address));

    return Object.assign(this.hero, model, {
      secretLairs: null,
      addresses: lairs
    })
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => {
        this.hero = hero;

        const addressFGs = hero.addresses.map(address => this.formBuilder.group(address));
        const addressFormArray = this.formBuilder.array(addressFGs);

        this.heroForm.patchValue({
          name: hero.name,
          power: hero.power,
          sidekick: hero.sidekick
        });

        this.heroForm.setControl('secretLairs', addressFormArray);

        this.loading = false;
      });
  }
}
