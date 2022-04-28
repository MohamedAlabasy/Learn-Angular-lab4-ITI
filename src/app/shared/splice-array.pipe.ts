import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spliceArray'
})
export class SpliceArrayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
