import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  PercentPipe,
} from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

enum Format {
  CURRENCY = 'currency',
  PERCENT = 'percent',
  NUMBER = 'number',
  DATE = 'datetime',
  NONE = 'none',
}

@Pipe({
  name: 'responseDef',
})
export class ResponseDefinitionPipe implements PipeTransform {
  constructor(
    private decimalPipe: DecimalPipe,
    private percentPipe: PercentPipe,
    private currencyPipe: CurrencyPipe,
    private datePipe: DatePipe
  ) {}

  transform(value: string | number, definition: any, elementName: string): any {
    let result = value || null;
    if (result) {
      switch (definition[elementName].format) {
        case Format.CURRENCY:
          result = this.currencyPipe.transform(
            result,
            'USD',
            'symbol',
            definition[elementName].digitsInfo
          );
          break;

        case Format.PERCENT:
          result = this.percentPipe.transform(
            result,
            definition[elementName].digitsInfo
          );
          break;

        case Format.NUMBER:
          result = this.decimalPipe.transform(
            result,
            definition[elementName].digitsInfo
          );
          break;

        case Format.DATE:
          result = this.datePipe.transform(result);
          break;

        default:
          break;
      }

      return result;
    }
    return 'NA';
  }
}
