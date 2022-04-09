import { TodoEntriesGetterModel } from 'src/models/TodoEntriesGetterModel';
import { TodoEntriesGetterService } from 'src/services/entriesGetter/todo-entries-getter.service';

export const environment = {
  production: true,
  IOC: [
    {
      provide: TodoEntriesGetterModel,
      useClass: TodoEntriesGetterService,
    },
  ],
};
