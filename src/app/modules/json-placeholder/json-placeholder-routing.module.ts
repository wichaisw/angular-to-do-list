import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonPlaceholderComponent } from './json-placeholder.component';

const routes: Routes = [
  {
    path: '',
    component: JsonPlaceholderComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsonPlaceholderRoutingModule { }
