import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom-button',
  template: '<i class="fas fa-times"></i>',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent implements OnInit {
  @Output() click = new EventEmitter<Event>();

  constructor() {}

  ngOnInit(): void {}
}
