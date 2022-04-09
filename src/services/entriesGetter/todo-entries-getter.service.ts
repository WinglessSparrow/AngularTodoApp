import { Injectable } from '@angular/core';
import { Task } from 'src/classes/Task';
import { TodoEntry } from 'src/classes/TodoEntry';
import { TodoEntriesGetterModel } from '../../models/TodoEntriesGetterModel';

@Injectable({
  providedIn: 'root',
})
export class TodoEntriesGetterService implements TodoEntriesGetterModel {
  constructor() {}

  getEntries(): Task[] {
    return [
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
    ];
  }
}
