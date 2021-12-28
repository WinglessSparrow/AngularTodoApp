import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import produce from 'immer';
import { TodoEntry } from 'src/classes/TodoEntry';

@Component({
  selector: 'todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.scss'],
})
export class TodoEntryComponent implements OnInit {
  @Input() nr!: number;
  @Input() todoEntry!: TodoEntry;
  @Input() deleting: boolean = false;
  @Output() todoEntryChange = new EventEmitter<TodoEntry>();

  uId!: string;

  ngOnInit(): void {
    this.uId = this.nr.toString();
    this.nr++;
  }

  changeText(event: string) {
    this.todoEntry = produce(this.todoEntry, (draft: TodoEntry) => {
      draft.text = event;
    });
  }

  changeValue(value: boolean) {
    this.todoEntry = new TodoEntry({
      id: this.todoEntry.id,
      text: this.todoEntry.text,
      isDone: value,
    });
    this.todoEntryChange.emit(this.todoEntry);
  }

  deleteEntry() {
    this.todoEntryChange.emit(
      produce(this.todoEntry, (draft: TodoEntry) => {
        draft.text = 'null';
      })
    );
  }
}
