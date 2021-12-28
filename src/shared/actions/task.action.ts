import { Task } from 'src/classes/Task';
import { RemoveTodoEntryModel } from 'src/models/RemoveTodoEntryModel';
import { TaskTodoItemChangeModel } from 'src/models/TaskTodoItemChangeModel';

export class AddMultipleTask {
  static readonly type = '[TASK] AddMultiple';

  constructor(public payload: Task[]) {}
}

export class AddTask {
  static readonly type = '[TASK] Add';

  constructor(public payload: Task) {}
}

export class ChangeTask {
  static readonly type = '[TASK] Change';

  constructor(public payload: Task) {}
}

export class ChangeTodoEntry {
  static readonly type = '[TASK] ChangeTodoEntry';

  constructor(public payload: TaskTodoItemChangeModel) {}
}

export class RemoveTask {
  static readonly type = '[TASK] Remove';

  constructor(public payload: Task) {}
}

export class RemoveEntry {
  static readonly type = '[TASK] removeEntry';

  constructor(public payload: RemoveTodoEntryModel) {}
}
