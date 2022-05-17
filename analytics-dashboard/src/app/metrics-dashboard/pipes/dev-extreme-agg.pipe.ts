import { Pipe, PipeTransform } from '@angular/core';

const DevExtremeAggFn = {
  none: '',
  sum: 'sum',
  average: 'avg',
};

@Pipe({
  name: 'devExtremeAgg',
})
export class DevExtremeAggPipe implements PipeTransform {
  transform(value: 'none' | 'sum' | 'average'): string {
    return DevExtremeAggFn[value];
  }
}
