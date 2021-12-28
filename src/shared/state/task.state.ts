import { Injectable } from '@angular/core';
import {
  Action,
  createSelector,
  Selector,
  State,
  StateContext,
} from '@ngxs/store';
import { produce } from 'immer';
import { Task } from '../../classes/Task';
import {
  AddMultipleTask,
  AddTask,
  ChangeTask,
  ChangeTodoEntry,
  RemoveEntry,
  RemoveTask,
} from '../actions/task.action';

export class TaskStateModel {
  tasks!: Task[];
}

@State<TaskStateModel>({
  name: 'tasks',
  defaults: {
    tasks: [],
  },
})
@Injectable()
export class TaskState {
  @Selector()
  static getTasks(state: TaskStateModel) {
    return state.tasks;
  }

  @Action(AddMultipleTask)
  addMultiple(
    { patchState }: StateContext<TaskStateModel>,
    { payload }: AddMultipleTask
  ) {
    patchState({
      tasks: payload,
    });
  }

  @Action(AddTask)
  add(
    { getState, setState }: StateContext<TaskStateModel>,
    { payload }: AddTask
  ) {
    setState(
      produce(getState(), (draft: TaskStateModel) => {
        payload.id = draft.tasks.length;
        draft.tasks.push(payload);
      })
    );
  }

  @Action(ChangeTodoEntry)
  changeEntry(
    { setState, getState }: StateContext<TaskStateModel>,
    { payload }: ChangeTodoEntry
  ) {
    const newState = produce(getState(), (draft: TaskStateModel) => {
      draft.tasks[payload.taskId].entries[payload.entryId].isDone =
        payload.newIsDone;
      draft.tasks[payload.taskId].entries[payload.entryId].text =
        payload.newEntryText;
    });
    setState(newState);
  }

  @Action(ChangeTask)
  changeTask(
    { setState, getState }: StateContext<TaskStateModel>,
    { payload }: ChangeTask
  ) {
    setState(
      produce(getState(), (draft: TaskStateModel) => {
        draft.tasks[payload.id] = payload;
      })
    );
  }

  @Action(RemoveEntry)
  removeEntry(
    { setState, getState }: StateContext<TaskStateModel>,
    { payload }: RemoveEntry
  ) {
    setState(
      produce(getState(), (draft: TaskStateModel) => {
        var idx: number = payload.entryId;
        var arr = draft.tasks[payload.taskId].entries.slice(0, idx);
        idx++;
        draft.tasks[payload.taskId].entries = arr.concat(
          draft.tasks[payload.taskId].entries.slice(idx)
        );
        draft.tasks[payload.taskId].entries.forEach((e, idx) => {
          e.id = idx;
        });
      })
    );
  }

  @Action(RemoveTask)
  removeTask(
    { setState, getState }: StateContext<TaskStateModel>,
    { payload }: RemoveTask
  ) {
    setState(
      produce(getState(), (draft: TaskStateModel) => {
        var idx: number = payload.id;
        var arr = draft.tasks.slice(0, idx);
        idx++;
        draft.tasks = arr.concat(draft.tasks.slice(idx));
        draft.tasks.forEach((e, idx) => {
          e.id = idx;
        });
      })
    );
  }
}
