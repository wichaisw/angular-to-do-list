import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToDoListModalComponent } from './to-do-list-modal/to-do-list-modal.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styles: [
  ]
})
export class ToDoListComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    
  }

  openModal() {
    const dialogRef = this.dialog.open(ToDoListModalComponent, {
      data: {
        name: "test name"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'save') {
        // reFetch()
        alert("Saved!")
      }
    });
  }

}
