import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEntryPanelComponent } from './todo-entry-panel.component';

describe('TodoEntryPanelComponent', () => {
  let component: TodoEntryPanelComponent;
  let fixture: ComponentFixture<TodoEntryPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoEntryPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoEntryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
