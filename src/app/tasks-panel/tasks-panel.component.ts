import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Task } from 'src/classes/Task';
import { TodoEntry } from 'src/classes/TodoEntry';
import { AddTask } from 'src/shared/actions/task.action';
import { TaskState } from 'src/shared/state/task.state';

@Component({
  selector: 'tasks-panel',
  templateUrl: './tasks-panel.component.html',
  styleUrls: ['./tasks-panel.component.scss'],
})
export class TasksPanelComponent implements OnInit {
  chosenTask!: Task;

  @Output() eventTaskChosen = new EventEmitter<Task>();
  @Output() newTask = new EventEmitter();

  @Select(TaskState.getTasks) tasks$!: Observable<Task[]>;

  constructor(private store: Store) {
    this.tasks$.subscribe((tasks: Task[]) => {
      if (this.chosenTask != undefined) {
        this.chosenTask = tasks[this.chosenTask.id];
        this.eventTaskChosen.emit(this.chosenTask);
      }
    });
  }

  ngOnInit(): void {}

  chooseTask(task: Task): void {
    this.chosenTask = task;
    this.eventTaskChosen.emit(task);
    this.newTask.emit();
  }

  addTask() {
    this.store.dispatch(new AddTask(new Task({ name: 'blank', entries: [] })));
  }
}
