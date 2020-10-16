import {NgModule} from '@angular/core';
import {PlaceholderDirective} from './directive/placeholder.directive';
import {DropdownDirective} from './directive/dropdown.directive';
import {EmotionTranslatePipe} from './pipe/EmotionTranslate.pipe';

@NgModule({
  declarations: [
    PlaceholderDirective, DropdownDirective, EmotionTranslatePipe
  ],
  exports: [
    PlaceholderDirective,
    DropdownDirective,
    EmotionTranslatePipe
  ]
})
export class SharedModule {
}
