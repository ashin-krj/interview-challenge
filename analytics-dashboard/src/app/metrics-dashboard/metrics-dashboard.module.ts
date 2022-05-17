import { NgModule } from '@angular/core';
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  PercentPipe,
} from '@angular/common';

import { MetricsDashboardRoutingModule } from './metrics-dashboard-routing.module';
import { MetricsDashboardWrapperComponent } from './components/metrics-dashboard-wrapper/metrics-dashboard-wrapper.component';
import { LabelDefinitionPipe } from './pipes/label-definition.pipe';
import { ResponseDefinitionPipe } from './pipes/response-definition.pipe';
import { DxDataGridModule } from 'devextreme-angular';
import { DevExtremeAggPipe } from './pipes/dev-extreme-agg.pipe';
import { MetricsOverviewComponent } from './components/metrics-overview/metrics-overview.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';

@NgModule({
  declarations: [
    MetricsDashboardWrapperComponent,
    LabelDefinitionPipe,
    ResponseDefinitionPipe,
    DevExtremeAggPipe,
    MetricsOverviewComponent,
    DataGridComponent,
  ],
  imports: [CommonModule, MetricsDashboardRoutingModule, DxDataGridModule],
  providers: [PercentPipe, CurrencyPipe, DecimalPipe, DatePipe],
})
export class MetricsDashboardModule {}
