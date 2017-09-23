import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { HeroService } from '../hero.service';

import { HeroesComponent } from './heroes.component';



describe('HeroesComponent', () => {
  let fixture, getHeroesSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent
      ],
      imports: [
        RouterTestingModule,
        HttpModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroesComponent);
    const heroService = fixture.debugElement.injector.get(HeroService);
    getHeroesSpy = spyOn(heroService, 'getHeroes').and.returnValue(Promise.resolve([]));
  }));

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.selectedHero).toEqual(undefined);
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('My Heroes');
  }));
});
