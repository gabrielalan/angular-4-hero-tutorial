import { Component, OnInit } from '@angular/core';
import Hero from './hero/hero';
import HeroService from './hero/hero.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [
		HeroService
	]
})
export class AppComponent implements OnInit {
	title = 'Aff!';
	heroes: Hero[];
	selectedHero: Hero;

	constructor(private heroService: HeroService) {}

	ngOnInit() {
		this.getHeroes();
	}

	getHeroes() {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
}