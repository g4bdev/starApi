import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarHomeComponent } from './star-home/star-home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { StarHeaderComponent } from './star-header/star-header.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatTabsModule} from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { StarMovieComponent } from './star-movie/star-movie.component';
import { StarCharComponent } from './star-char/star-char.component';
import { StarPlanetsComponent } from './star-planets/star-planets.component';

@NgModule({
  declarations: [
    AppComponent,
    StarHomeComponent,
    StarHeaderComponent,
    StarMovieComponent,
    StarCharComponent,
    StarPlanetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule, 
    MatTabsModule,
    MatButtonModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
