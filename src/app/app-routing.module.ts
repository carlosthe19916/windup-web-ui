import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutGuard } from "./core/authentication/logout.guard";
import { DefaultLayoutComponent } from "./shared/layout/default-layout.component";

const routes: Routes = [
  {
    path: 'logout',
    canActivate: [LogoutGuard],
    component: DefaultLayoutComponent
  },
  // {
  //   path: '**',  // The wildcard route pushes the user to the main page if there is no match
  //   redirectTo: '/project-list'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
