import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsSelectSnapshotModule } from '@ngxs-labs/select-snapshot';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { TaskState } from 'src/shared/state/task.state';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { HeaderComponent } from './header/header.component';
import { TaskEntryComponent } from './task-entry/task-entry.component';
import { TasksPanelComponent } from './tasks-panel/tasks-panel.component';
import { TodoEntryPanelHeaderComponent } from './todo-entry-panel-header/todo-entry-panel-header.component';
import { TodoEntryPanelComponent } from './todo-entry-panel/todo-entry-panel.component';
import { TodoEntryComponent } from './todo-entry/todo-entry.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksPanelComponent,
    TodoEntryPanelComponent,
    TaskEntryComponent,
    TodoEntryComponent,
    TodoHeaderComponent,
    TodoEntryPanelHeaderComponent,
    CheckboxComponent,
    CustomButtonComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    NgxsModule.forRoot([TaskState], {
      developmentMode: !environment.production,
    }),
    NgxsSelectSnapshotModule,
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: environment.IOC,
  bootstrap: [AppComponent],
})
export class AppModule {}
