import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarHomeComponent } from './star-home/star-home.component';

const routes: Routes = [
  {path: 'home', component: StarHomeComponent},
  {path: 'home', component: StarHomeComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
