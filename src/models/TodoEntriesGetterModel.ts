import { Task } from '../classes/Task';

export abstract class TodoEntriesGetterModel {
  constructor() {}
  abstract getEntries(): Task[];
}
