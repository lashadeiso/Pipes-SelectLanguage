import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLimit',
})
export class TextLimitPipe implements PipeTransform {
  transform(value: string, maxSymbolsCount: number): string {
    return value.substring(0, maxSymbolsCount) + '...';
  }
}

//ანუ რა ტექსტიც დაბრუნდება იმას მივუწეროთ სამი წერტილი
