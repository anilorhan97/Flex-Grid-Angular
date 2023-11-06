import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexComponent } from './components/flex/flex.component';
import { GridComponent } from './components/grid/grid.component';

const routes: Routes = [
  {path:'flex', component:FlexComponent},
  {path:'grid', component:GridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
