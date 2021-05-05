import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { BarchartComponent } from './barchart/barchart.component'

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'user/:login', component:UserComponent},
  {path:'chart',component:BarchartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
