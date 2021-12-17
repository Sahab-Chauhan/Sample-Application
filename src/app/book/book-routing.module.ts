import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BookComponent } from './book.component';

const routes: Routes = [
  {
    path: '', component: BookComponent,
    children: [
      {
        path: 'add',
        component: AddbookComponent
      }
     
    ]
  },
  {
    path:'**',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
