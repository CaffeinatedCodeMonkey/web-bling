import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { HeaderSpanComponent } from './header-span.component';
import { EntryPointComponent } from './entry-point.component';

@NgModule({
  imports: [CommonModule],
  declarations: [InputComponent, HeaderSpanComponent, EntryPointComponent],
  exports: [EntryPointComponent]
})
export class BundledStylesModule {}
