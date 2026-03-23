import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmuComponent } from './amu.component';

describe('AmuComponent', () => {
  let component: AmuComponent;
  let fixture: ComponentFixture<AmuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
