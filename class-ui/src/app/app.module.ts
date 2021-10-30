import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ImdbartistComponent } from './imdbartist/imdbartist.component';

import { ReactiveFormsModule } from '@angular/forms';
import {PlayerComponent} from './player/player.component';
import { SnuffleComponent } from './snuffle/snuffle.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImdbartistComponent,
    PlayerComponent,
    SnuffleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


