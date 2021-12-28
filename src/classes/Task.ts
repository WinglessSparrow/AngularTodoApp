import { immerable } from 'immer';
import { TodoEntry, TodoEntryModel } from './TodoEntry';

export interface TaskModel {
  name: string;
  entries: TodoEntryModel[];
}

export class Task implements TaskModel {
  [immerable] = true;

  private _id: number = -1;
  private _name!: string;
  private _entries!: TodoEntry[];

  constructor(value: any) {
    Object.assign(this, value);
  }

  completenessInPercent(): string {
    var count = 0;

    this.entries.forEach((e) => {
      if (e.isDone) count++;
    });

    if (this.entries.length == 0) return 'no Entries';

    return Math.round((count / this.entries.length) * 100)
      .toString()
      .concat('%');
  }

  public get name(): string {
    return this._name;
  }

  public set name(v: string) {
    this._name = v;
  }

  public get entries(): TodoEntry[] {
    return this._entries;
  }

  public set entries(v: TodoEntry[]) {
    this._entries = v;
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }
}
