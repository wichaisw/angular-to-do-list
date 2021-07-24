import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from 'src/app/core/services/json-placeholder.service';
import { Users } from 'src/app/shared/interfaces/users';

@Component({
  selector: 'app-json-placeholder',
  templateUrl: './json-placeholder.component.html',
  styles: [
  ]
})
export class JsonPlaceholderComponent implements OnInit {
  isFetching: boolean = false;
  users: Users[] = [];

  constructor(
    private jsonPlaceholderService: JsonPlaceholderService
  ) { }

  ngOnInit(): void {
    
  }

  fetchJsonPlaceholderUsers() {
    this.isFetching = true;
    this.jsonPlaceholderService.fetchAll()
      .subscribe(res => {
        console.log(res);
        this.users = res;
      }, err => {
        console.log(err);
      })
      .add(() => {
        this.isFetching = false;
      })
  }
}
