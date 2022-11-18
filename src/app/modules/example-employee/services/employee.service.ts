import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ExampleRequest } from '../../shared/models/example-request.models';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<ExampleRequest> {
    return this.http.get<ExampleRequest>('https://dummy.restapiexample.com/api/v1/employees');
  }
}
