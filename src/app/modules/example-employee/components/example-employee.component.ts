import { Component, OnInit } from '@angular/core';
import { Employee } from '../../shared/models/employee.model';
import { ExampleRequest } from '../../shared/models/example-request.models';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-example-employee',
  templateUrl: './example-employee.component.html',
  styleUrls: ['./example-employee.component.scss'],
})
export class ExampleEmployeeComponent implements OnInit {
  public apiData: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe({
      next: (result: ExampleRequest) => (this.apiData = result.data),
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }
}
