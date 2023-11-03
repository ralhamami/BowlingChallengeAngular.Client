import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlingScorecardComponent } from './bowling-scorecard.component';

describe('BowlingScorecardComponent', () => {
  let component: BowlingScorecardComponent;
  let fixture: ComponentFixture<BowlingScorecardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BowlingScorecardComponent]
    });
    fixture = TestBed.createComponent(BowlingScorecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
