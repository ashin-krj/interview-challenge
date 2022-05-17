import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'labelDef',
})
export class LabelDefinitionPipe implements PipeTransform {
  transform(value: string, definitions: any): string {
    return definitions[value] ? definitions[value].label : value;
  }
}
