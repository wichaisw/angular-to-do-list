import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
})
export class PrimaryButtonComponent implements OnInit {
  @Input() isLoading: boolean = false;
  @Input() buttonText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
