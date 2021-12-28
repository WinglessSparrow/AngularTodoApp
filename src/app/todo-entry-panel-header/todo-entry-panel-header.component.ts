import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'todo-entry-panel-header',
  templateUrl: './todo-entry-panel-header.component.html',
  styleUrls: ['./todo-entry-panel-header.component.scss'],
})
export class TodoEntryPanelHeaderComponent implements OnInit {
  @Input() name: string = 'placeholder';

  @Input() mode: boolean = false;
  @Output() modeChange = new EventEmitter<boolean>();

  @Output() nameChange = new EventEmitter<string>();
  @Output() onDeleteButton = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  switchMode() {
    this.mode = !this.mode;
    this.modeChange.emit(this.mode);
  }

  changeName() {
    this.nameChange.emit(this.name);
  }

  deleteTask() {
    this.onDeleteButton.emit();
  }
}
