import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Task } from 'src/classes/Task';
import { TaskState } from 'src/shared/state/task.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  amount: number = 0;

  constructor(private store: Store) {
    this.store.select(TaskState.getTasks).subscribe((tasks: Task[]) => {
      this.amount = tasks.length;
    });
  }

  ngOnInit(): void {}
}
