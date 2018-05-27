import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';

const routes: Routes = [
  { path: '', redirectTo: 'one', pathMatch: 'full' },
  { path: 'one', component: OneComponent, data: { page: 'one' } },
  { path: 'two', component: TwoComponent, data: { page: 'two' } },
  { path: 'three', component: ThreeComponent, data: { page: 'three' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
