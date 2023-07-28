import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'

@Pipe({
  name: 'timeFromNow'
})
export class TimeFromNowPipe implements PipeTransform {

  transform(date: Date | undefined): unknown {
    if(!date) {
      return
    }
    return moment(date).fromNow();
  }

}
