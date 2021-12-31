import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Task } from 'src/classes/Task';
import { AddTask } from 'src/shared/actions/task.action';

@Component({
  selector: 'tasks-panel',
  templateUrl: './tasks-panel.component.html',
  styleUrls: ['./tasks-panel.component.scss'],
})
export class TasksPanelComponent implements OnInit {
  @Input() chosenTask!: Task;
  @Input() tasks!: Task[] | null;

  @Output() eventTaskChosen = new EventEmitter<Task>();

  constructor(private store: Store) {}

  ngOnInit(): void {}

  chooseTask(task: Task): void {
    this.chosenTask = task;
    this.eventTaskChosen.emit(task);
  }

  addTask() {
    this.store.dispatch(new AddTask(new Task({ name: 'blank', entries: [] })));
  }
}
