import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleHardwareComponent } from './example-hardware.component';

describe('ExampleHardwareComponent', () => {
  let component: ExampleHardwareComponent;
  let fixture: ComponentFixture<ExampleHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleHardwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
