import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Task } from 'src/classes/Task';
import { TodoEntry } from 'src/classes/TodoEntry';
import { AddMultipleTask } from 'src/shared/actions/task.action';
import { TaskState } from 'src/shared/state/task.state';
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

  constructor(private store: Store) {
    this.store.dispatch(
      new AddMultipleTask([
        new Task({
          id: '0',
          name: 'name1',
          entries: [
            new TodoEntry({
              id: '0',
              text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, sapiente voluptas? Iste, labore nobis suscipit quaerat illum odit enim voluptatibus.',
              isDone: true,
            }),
            new TodoEntry({ id: '1', text: 'text2', isDone: true }),
            new TodoEntry({ id: '2', text: 'text3', isDone: true }),
            new TodoEntry({ id: '3', text: 'text4', isDone: true }),
            new TodoEntry({ id: '4', text: 'text5', isDone: true }),
            new TodoEntry({ id: '5', text: 'text6', isDone: true }),
            new TodoEntry({ id: '6', text: 'text7', isDone: true }),
            new TodoEntry({ id: '7', text: 'text8', isDone: true }),
          ],
        }),
        new Task({
          id: '1',
          name: 'name2',
          entries: [new TodoEntry({ id: '0', text: 'text', isDone: true })],
        }),
        new Task({
          id: '2',
          name: 'name3',
          entries: [new TodoEntry({ id: '0', text: 'text', isDone: true })],
        }),
        new Task({
          id: '3',
          name: 'name4',
          entries: [new TodoEntry({ id: '0', text: 'text', isDone: true })],
        }),
      ])
    );
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
