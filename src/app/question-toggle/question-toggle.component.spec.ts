import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionToggleComponent } from './question-toggle.component';

describe('QuestionToggleComponent', () => {
  let component: QuestionToggleComponent;
  let fixture: ComponentFixture<QuestionToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
