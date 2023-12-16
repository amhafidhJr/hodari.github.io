import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel/carousel.component';
import { CompileComponent } from './compile/compile/compile.component';
import { AreaComponent } from './priority-area/area/area.component';
import { DetailComponent } from './hodari-detail/detail/detail.component';
import { NewsComponent } from './latest-news/news/news.component';
import { FooterComponent } from './footer/footer/footer.component';
import { ContactComponent } from './contact-us/contact/contact.component';
import { TeamComponent } from './our-team/team/team.component';
import { InsideFooterComponent } from './inside-footer/inside-footer/inside-footer.component';
import { HomeComponent } from './home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CompileComponent,
    AreaComponent,
    DetailComponent,
    NewsComponent,
    FooterComponent,
    ContactComponent,
    TeamComponent,
    InsideFooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
