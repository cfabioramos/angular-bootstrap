import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagePocComponent } from './message-poc.component';

describe('MessagePocComponent', () => {
  let component: MessagePocComponent;
  let fixture: ComponentFixture<MessagePocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagePocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagePocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
