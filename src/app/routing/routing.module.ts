import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import {ConferenceListComponent } from '../conference-list/conference-list.component'
import { AddConfComponent } from '../add-conf/add-conf.component';
import { ConferenceDetailsComponent } from '../conference-details/conference-details.component';

const routes: Routes = [
  {
    path: '',
    component: ConferenceListComponent
  },
  {
    path: 'add',
    component: AddConfComponent
  }, 
  {
    path: ':id/details',
    component: ConferenceDetailsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
