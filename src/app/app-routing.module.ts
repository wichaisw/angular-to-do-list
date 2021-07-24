import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'to-do-list',
    loadChildren: () => import('./modules/to-do-list/to-do-list.module').then(m => m.ToDoListModule),
  },
  {
    path: 'json-placeholder',
    loadChildren: () => import('./modules/json-placeholder/json-placeholder.module').then(m => m.JsonPlaceholderModule),
  },
  {
    path: '**',
    redirectTo: 'login',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
