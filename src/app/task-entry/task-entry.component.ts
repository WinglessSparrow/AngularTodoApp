import { Component, HostBinding, Input, OnInit } from '@angular/core';

import { Task } from '../../classes/Task';

@Component({
  selector: 'task-entry',
  templateUrl: './task-entry.component.html',
  styleUrls: ['./task-entry.component.scss'],
})
export class TaskEntryComponent implements OnInit {
  @Input() task!: Task;
  @HostBinding('style.--progress') taskCompleteness: string =
    'cannot be calculated!';

  ngOnInit(): void {
    this.taskCompleteness = this.task.completenessInPercent();
  }
}
