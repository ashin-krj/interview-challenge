import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetricsDashboardWrapperComponent } from './components/metrics-dashboard-wrapper/metrics-dashboard-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: MetricsDashboardWrapperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetricsDashboardRoutingModule {}
