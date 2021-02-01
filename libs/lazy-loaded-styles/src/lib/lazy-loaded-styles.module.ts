import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSpanComponent } from './header-span.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderSpanComponent],
  exports: [HeaderSpanComponent]
})
export class LazyLoadedStylesModule {}
