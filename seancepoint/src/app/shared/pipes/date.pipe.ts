import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(date: Date | string): string | undefined {
    if (!date) {
      return
    }

    return moment(date).format('MMMM Do YYYY, hh:mm A');
  }

}
