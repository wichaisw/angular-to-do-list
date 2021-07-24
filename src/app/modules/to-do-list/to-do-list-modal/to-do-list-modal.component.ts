import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JsonPlaceholderService } from 'src/app/core/services/json-placeholder.service';

@Component({
  selector: 'app-to-do-list-modal',
  templateUrl: './to-do-list-modal.component.html',
  styles: [
  ]
})
export class ToDoListModalComponent implements OnInit {
  isLoading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ToDoListModalComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {
      name: string
    },
    private jsonPlaceHolderService: JsonPlaceholderService
  ) { }

  toDoListForm = this.fb.group({
    title: ['', Validators.required],
    body: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],

  })

  ngOnInit(): void {
    console.log(this.data)
    this.toDoListForm.patchValue({
      title: this.data.name
    })
  }

  onSave() {
    this.isLoading = true;
    this.toDoListForm.markAllAsTouched();
    if(!this.toDoListForm.valid) return;

    this.jsonPlaceHolderService.fetchAll()
      .subscribe(res => {
        console.log(res)
        this.dialogRef.close("save");
      }, err => {
        console.log(err)
        this.dialogRef.close("error");
      })
      .add(() => {
        this.isLoading = false;
      })
  }

}
