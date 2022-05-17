import { Component, Input } from '@angular/core';

@Component({
  selector: 'mad-metrics-overview',
  templateUrl: './metrics-overview.component.html',
  styleUrls: ['./metrics-overview.component.scss'],
})
export class MetricsOverviewComponent {
  @Input() layoutItem: any;
  @Input() layoutResponse: any;
  @Input() backendResponse: any;
}
