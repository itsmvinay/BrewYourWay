import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrewViewComponent } from './brew-view/brew-view.component';

const routes: Routes = [
  { path: 'brewView', component: BrewViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
