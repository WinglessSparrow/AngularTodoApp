import { immerable } from 'immer';

export interface TodoEntryModel {
  text?: string;
  isDone: boolean;
}

export class TodoEntry implements TodoEntryModel {
  [immerable] = true;

  private _id: number = -1;
  private _text!: string;
  private _isDone!: boolean;

  constructor(value: any) {
    Object.assign(this, value);
  }

  public get text(): string {
    return this._text;
  }

  public set text(value: string) {
    this._text = value;
  }

  public get isDone(): boolean {
    return this._isDone;
  }

  public set isDone(value: boolean) {
    this._isDone = value;
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }
}
