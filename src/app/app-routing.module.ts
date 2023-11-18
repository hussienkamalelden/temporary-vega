import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', data: { title: 'Home' } },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
