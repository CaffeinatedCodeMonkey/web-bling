import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryPointComponent } from './entry-point.component';
import { InputComponent } from './input.component';
import { HeaderSpanComponent } from './header-span.component';


@NgModule({
  imports: [CommonModule],
  declarations: [EntryPointComponent, InputComponent, HeaderSpanComponent],
  exports: [EntryPointComponent],
})
export class WaitForLazyStylesModule {}
