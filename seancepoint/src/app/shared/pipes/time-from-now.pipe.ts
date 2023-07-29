import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'

@Pipe({
  name: 'timeFromNow'
})
export class TimeFromNowPipe implements PipeTransform {

  transform(date: Date | string): unknown {
    if(!date) {
      return
    }
    return moment(date).fromNow();
  }

}
