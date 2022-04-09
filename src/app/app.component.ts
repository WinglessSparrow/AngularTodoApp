import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Task } from 'src/classes/Task';
import { TodoEntriesGetterModel } from 'src/models/TodoEntriesGetterModel';
import { AddMultipleTask } from 'src/shared/actions/task.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('200ms', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('200ms', style({ transform: 'translateY(100%)' })),
      ]),
    ]),
  ],
})
export class AppComponent {
  chosenTask: Task | undefined;

  constructor(
    private store: Store,
  private entriesGetter: TodoEntriesGetterModel
  ) {
    this.store.dispatch(new AddMultipleTask(entriesGetter.getEntries()));
  }

  setChosenTask(task: Task) {
    this.chosenTask = task;
  }

  triggerAnimation() {
    let temp = this.chosenTask;
    this.chosenTask = undefined;
    setTimeout(() => {
      this.chosenTask = temp;
    }, 200);
  }

  closePanel() {
    this.chosenTask = undefined;
  }
}
