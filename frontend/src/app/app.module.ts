import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TestsComponent } from './tests/tests.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { DomainsComponent } from './domains/domains.component';
import { Covid19indiaComponent } from './covid19india/covid19india.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HttpClientModule } from '@angular/common/http';
import { CovidserviceService } from './covidservice.service';
import { FrontscreenComponent } from './frontscreen/frontscreen.component';
import { RadiologycomponentComponent } from './radiologycomponent/radiologycomponent.component';
import { PathologycomponentComponent } from './pathologycomponent/pathologycomponent.component';
import { LoaderComponent } from './loader/loader.component';
import { TeamsComponent } from './teams/teams.component';
import { Test1Component } from './test1/test1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    NotfoundComponent,
    TestsComponent,
    TestimonialsComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    DomainsComponent,
    Covid19indiaComponent,
    AboutusComponent,
    FrontscreenComponent,
    RadiologycomponentComponent,
    PathologycomponentComponent,
    LoaderComponent,
    TeamsComponent,
    Test1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CovidserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
