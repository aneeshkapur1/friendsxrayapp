import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TestsComponent } from './tests/tests.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NeurologycomponentComponent } from './neurologycomponent/neurologycomponent.component';
import { RadiologycomponentComponent } from './radiologycomponent/radiologycomponent.component';
import { PathologycomponentComponent } from './pathologycomponent/pathologycomponent.component';
import { TeamsComponent } from './teams/teams.component';
import { Test1Component } from './test1/test1.component';


const routes: Routes = [

  {
  path : '', redirectTo:'/home', pathMatch:'full'
  },
    {
      path:'home', component:HomeComponent
    }, 
    {
      path:'aboutus', component: AboutusComponent
    },
    {
      path:'contactus', component: ContactusComponent
    },
    {
      path :'tests', component: TestsComponent
    },
    {
      path:'neurology', component:NeurologycomponentComponent
    },
    {
      path:'radiology', component:RadiologycomponentComponent
    },
    {
      path:'pathology', component: PathologycomponentComponent
    },
    {
      path:'tests', component: TestsComponent
    }, 
    {
        path: 'team', component: TeamsComponent
    },
    {
      path:'test1', component: Test1Component, outlet : 'testoutlet'
    },
    {
      path :'**',
      component:NotfoundComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
