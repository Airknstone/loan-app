/*
 Title: app-routing.module.ts
 Author: Professor Krasso
 Date: 07/24/2022
 Modified By: Allan Trejo
 Description: Assignment 9.2 Capstone Loan App
  Resources: Material Design https://material.angular.io/components
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: CalculatorComponent
  },
  {
    path: 'calculator',
    component: CalculatorComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
