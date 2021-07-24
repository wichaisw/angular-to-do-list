import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  isLoginLoading: boolean = false;
  isToDoListLoading: boolean = false;
  isJsonLoading: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
