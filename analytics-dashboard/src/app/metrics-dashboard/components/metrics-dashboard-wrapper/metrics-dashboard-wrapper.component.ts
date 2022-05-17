import { Component } from '@angular/core';

import {
  newLayoutResponse,
  backendDataResponse,
} from '../../../../../../dashboard-mock-response';
import { LayoutType } from '../../models/layout';

@Component({
  selector: 'app-metrics-dashboard-wrapper',
  templateUrl: './metrics-dashboard-wrapper.component.html',
  styleUrls: ['./metrics-dashboard-wrapper.component.scss'],
})
export class MetricsDashboardWrapperComponent {
  layoutResponse = newLayoutResponse;
  backendResponse = backendDataResponse;

  layoutTypes = LayoutType;
}
