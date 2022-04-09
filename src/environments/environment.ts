// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { TodoEntriesGetterModel } from 'src/models/TodoEntriesGetterModel';
import { TodoEntriesGetterMock } from 'src/services/entriesGetter/todo-entries-getter-mock.service';

export const environment = {
  production: false,
  IOC: [
    {
      provide: TodoEntriesGetterModel,
      useClass: TodoEntriesGetterMock,
    },
  ],
};
