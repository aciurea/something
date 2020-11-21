import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number = 0, position: string = 'after'): string {
    return value === 0
      ? value.toString()
      : position === 'after'
      ? `${value} GBP`
      : `GBP ${value}`;
  }
}
