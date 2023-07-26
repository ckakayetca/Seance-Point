import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceDetailsComponent } from './seance-details.component';

describe('SeanceDetailsComponent', () => {
  let component: SeanceDetailsComponent;
  let fixture: ComponentFixture<SeanceDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeanceDetailsComponent]
    });
    fixture = TestBed.createComponent(SeanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
