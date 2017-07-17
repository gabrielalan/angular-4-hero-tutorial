import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import HeroDetailComponent from './hero/detail/hero-detail.component';
import HeroesComponent from './hero/list/heroes.component';

const Routes = RouterModule.forRoot([
  {
    path: 'heroes',
    component: HeroesComponent
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
