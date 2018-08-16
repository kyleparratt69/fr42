import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticationComponent} from "./views/authentication/authentication.component";
import {RootComponent} from "./views/root/root.component";

const routes: Routes = [
  { path: '', component: AuthenticationComponent},
  { path: 'root', component: RootComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
