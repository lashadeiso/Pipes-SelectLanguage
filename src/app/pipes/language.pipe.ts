import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language',
  pure: false,
})
export class LanguagePipe implements PipeTransform {
  transform(value: any): unknown {
    return localStorage['language'] == 'English' ? value.eng : value.geo;
  }
}

// აქ ერთ ერთი მნიშვნელოვანი პარამეტრი არის pure
//რომელიც განსაზღვრავს ცვლილებაზე უნდა აღიძრას თუა არა ეს ფაიფი თავიდან
//დეფაულტად ყველა ფაიფი არის pure,და ის ჩეინზე არ აღიზრება
// ხოლო როდესაც ვაყენებთ false ზე მაშინ ის აღიძრება ჩეინჯის დროს
//ზუსტი განმარტება იხილეთ ინგლისურად

// When pipe is pure, transform() method is invoked only when
// its input arguments change. Pipes are pure by default.
// If the pipe has internal state (that is, the result depends
//on the state other than its arguments), set pure to false.
//In this case, the pipe is invoked on each change detection cycle,
// even if the arguments have not changed.
