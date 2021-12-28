import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom-checkbox',
  template: `
    <input
      id="checkbox-{{ uId }}"
      type="checkbox"
      [checked]="value"
      (change)="changeValue()"
    />
    <label for="checkbox-{{ uId }}">
      <i class="fas fa-check"></i>
    </label>
  `,
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() uId!: string;
  @Input() value: boolean = false;
  @Output() valueChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  changeValue() {
    this.value = !this.value;
    this.valueChange.emit(this.value);
  }
}
