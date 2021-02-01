import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSpanComponent } from './header-span.component';
import { InputComponent } from './input.component';
import { EntryPointComponent } from './entry-point.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderSpanComponent, InputComponent, EntryPointComponent],
  exports: [EntryPointComponent]
})
export class LazyLoadedStylesModule {}
