import {Pipe, PipeTransform} from '@angular/core';
import {EmotionUtils} from '../config/emotion.constants';

@Pipe({name: 'emotionTranslate'})
export class EmotionTranslatePipe implements PipeTransform {
  transform(emotion: string, ...args: any[]): any {
    return EmotionUtils.getEmotionTranslation(emotion);
  }
}
