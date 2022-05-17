import { Component, Input } from '@angular/core';

@Component({
  selector: 'mad-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
})
export class DataGridComponent {
  @Input() layoutItem: any;
  @Input() layoutResponse: any;
  @Input() backendResponse: any;

  // TODO: Modify this method to customize the total summary display.
  // Currently, devextreme doesn't allow to use cellTemplate for summary row.
  customizeSummary(e: any): string | null {
    return e.value.toFixed(0);
  }
}
