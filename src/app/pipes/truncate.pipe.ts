import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name:'truncate'
})
export class TruncatePipe implements PipeTransform{
  transform(value: string, limite: string): string{
    const limit = parseInt(limite,8);
    return value.length > limit ? value.substring(0,limit)+'...' :   value;
  }
}