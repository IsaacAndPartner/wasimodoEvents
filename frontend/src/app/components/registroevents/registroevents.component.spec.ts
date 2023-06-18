import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroeventsComponent } from './registroevents.component';

describe('RegistroeventsComponent', () => {
  let component: RegistroeventsComponent;
  let fixture: ComponentFixture<RegistroeventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroeventsComponent]
    });
    fixture = TestBed.createComponent(RegistroeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
