import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: string,replacewith:"/"): string {
   // return value.replace('-',replacewith);
   return value.split('').reverse().join('')

  }

}
