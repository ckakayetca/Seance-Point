import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSeanceComponent } from './new-seance.component';

describe('NewSeanceComponent', () => {
  let component: NewSeanceComponent;
  let fixture: ComponentFixture<NewSeanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewSeanceComponent]
    });
    fixture = TestBed.createComponent(NewSeanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
