import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'one', pathMatch: 'full' },
  { path: 'one', component: OneComponent, data: { page: 'one' } },
  { path: 'two', component: TwoComponent, data: { page: 'two' } },
  { path: 'three', component: ThreeComponent, data: { page: 'three' } },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
