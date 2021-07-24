import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { ToDoListComponent } from './to-do-list.component';
import { ToDoListModalComponent } from './to-do-list-modal/to-do-list-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ToDoListComponent,
    ToDoListModalComponent
  ],
  imports: [
    CommonModule,
    ToDoListRoutingModule,
    MatDialogModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  // entryComponents: [
  //   ToDoListModalComponent
  // ]
})
export class ToDoListModule { }
