import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonPlaceholderRoutingModule } from './json-placeholder-routing.module';
import { JsonPlaceholderComponent } from './json-placeholder.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    JsonPlaceholderComponent
  ],
  imports: [
    CommonModule,
    JsonPlaceholderRoutingModule,
    SharedModule,
  ]
})
export class JsonPlaceholderModule { }
