import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { Store } from '@ngxs/store';
import produce from 'immer';
import { TodoEntry } from 'src/classes/TodoEntry';
import {
  ChangeTask,
  ChangeTodoEntry,
  RemoveEntry,
  RemoveTask,
} from 'src/shared/actions/task.action';
import { Task } from '../../classes/Task';

@Component({
  selector: 'todo-entry-panel',
  templateUrl: './todo-entry-panel.component.html',
  styleUrls: ['./todo-entry-panel.component.scss'],
})
export class TodoEntryPanelComponent implements OnInit {
  @Input() task!: Task;

  @Output() taskDeleted = new EventEmitter();

  modeChange: boolean = false;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['task'].currentValue.id != this.task.id) {
      this.modeChange = false;
    }
  }

  modifyTask(event: string) {
    this.store.dispatch(
      new ChangeTask(
        produce(this.task, (draft: Task) => {
          draft.name = event;
        })
      )
    );
  }

  entryChanged(event: TodoEntry) {
    if (event.text == 'null') {
      this.store.dispatch(
        new RemoveEntry({ taskId: this.task.id, entryId: event.id })
      );
    } else {
      this.store.dispatch(
        new ChangeTodoEntry({
          taskId: this.task.id,
          entryId: event.id,
          newEntryText: event.text,
          newIsDone: event.isDone,
        })
      );
    }
  }

  addEntry() {
    let newTask: Task = produce(this.task, (draft: Task) => {
      draft.entries.push(
        new TodoEntry({
          id: draft.entries.length,
          text: 'blank',
          isDone: false,
        })
      );
    });
    this.store.dispatch(new ChangeTask(newTask));
  }

  deleteTask() {
    this.store.dispatch(new RemoveTask(this.task));
    this.taskDeleted.emit();
  }
}
