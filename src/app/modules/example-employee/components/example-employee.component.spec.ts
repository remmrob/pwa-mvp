import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleEmployeeComponent } from './example-employee.component';

describe('ExampleEmployeeComponent', () => {
  let component: ExampleEmployeeComponent;
  let fixture: ComponentFixture<ExampleEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
