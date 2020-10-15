import {NgModule} from '@angular/core';
import {PlaceholderDirective} from './directive/placeholder.directive';
import {DropdownDirective} from './directive/dropdown.directive';

@NgModule({
  declarations: [
    PlaceholderDirective, DropdownDirective
  ],
  exports: [
    PlaceholderDirective,
    DropdownDirective
  ]
})
export class SharedModule {
}
