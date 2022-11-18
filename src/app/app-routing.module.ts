import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleEmployeeComponent } from './view/example-employee/components/example-employee.component';
import { ExampleHardwareComponent } from './view/example-hardware/components/example-hardware.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'example-employee',
    component: ExampleEmployeeComponent
  },
  {
    path: 'example-hardware',
    component: ExampleHardwareComponent
  },
  { path: '', redirectTo: '/example-employee', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
