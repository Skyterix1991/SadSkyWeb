import {NgModule} from '@angular/core';
import {PlaceholderDirective} from './directive/placeholder.directive';

@NgModule({
  declarations: [
    PlaceholderDirective
  ],
  exports: [
    PlaceholderDirective
  ]
})
export class SharedModule {
}
