import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEntryPanelHeaderComponent } from './todo-entry-panel-header.component';

describe('TodoEntryPanelHeaderComponent', () => {
  let component: TodoEntryPanelHeaderComponent;
  let fixture: ComponentFixture<TodoEntryPanelHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoEntryPanelHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoEntryPanelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
