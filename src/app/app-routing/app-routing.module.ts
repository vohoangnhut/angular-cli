import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroListComponent } from '../hero-list/hero-list.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LearnComponent } from '../learn/learn.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'listhero',     component: HeroListComponent },
  { path: 'learn',     component: LearnComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}