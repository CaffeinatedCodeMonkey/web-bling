import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { HeaderSpanComponent, LazyLoadedStylesModule } from '@web-bling/lazy-loaded-styles';
import { BundledStylesModule, InputComponent } from '@web-bling/bundled-styles';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LazyLoadedStylesModule,
    BundledStylesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private _injector: Injector) {
    const library = new Map([
      ['wc-input', InputComponent],
      ['wc-header-span', HeaderSpanComponent],
    ]);
    for (const [name, comp] of library) {
      const webComponent = createCustomElement(comp, {injector: this._injector});
      customElements.define(name, webComponent);
    }
  }
}
