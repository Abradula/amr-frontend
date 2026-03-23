import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhonetComponent } from './whonet.component';

describe('WhonetComponent', () => {
  let component: WhonetComponent;
  let fixture: ComponentFixture<WhonetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhonetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhonetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
