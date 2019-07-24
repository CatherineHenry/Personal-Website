import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSidebarIconComponent } from './toggle-sidebar-icon.component';

describe('ToggleSidebarIconComponent', () => {
  let component: ToggleSidebarIconComponent;
  let fixture: ComponentFixture<ToggleSidebarIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleSidebarIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleSidebarIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
