import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimsComponent } from './lims.component';

describe('LimsComponent', () => {
  let component: LimsComponent;
  let fixture: ComponentFixture<LimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LimsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
