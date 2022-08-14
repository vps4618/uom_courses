import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentLimiter'
})
export class ContentLimiterPipe implements PipeTransform {

  transform(value: string):string {
    
    //when content having length greater than 50, fifty charactors will show and others will hide by showing ...
    if(value.length > 50){
      return value.substring(0,49) +'...';
    }else{
      return value;
    }
  }

}
