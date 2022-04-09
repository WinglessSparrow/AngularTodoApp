import { Injectable } from '@angular/core';
import { Task } from 'src/classes/Task';
import { TodoEntry } from 'src/classes/TodoEntry';
import { TodoEntriesGetterModel } from 'src/models/TodoEntriesGetterModel';

@Injectable({
  providedIn: 'root',
})
export class TodoEntriesGetterMock implements TodoEntriesGetterModel {
  constructor() {}

  getEntries(): Task[] {
    return [
      new Task({
        id: '0',
        name: 'hi, I am Task',
        entries: [
          new TodoEntry({
            id: '0',
            text: 'Lorem ipsum dolor sit amet consectetur',
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
        name: 'and you are',
        entries: [new TodoEntry({ id: '0', text: 'text', isDone: true })],
      }),
      new Task({
        id: '2',
        name: 'in testing',
        entries: [new TodoEntry({ id: '0', text: 'text', isDone: true })],
      }),
      new Task({
        id: '3',
        name: 'mode',
        entries: [new TodoEntry({ id: '0', text: 'text', isDone: true })],
      }),
    ];
  }
}
