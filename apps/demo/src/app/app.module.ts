import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

/**
 * Switch which module is loaded to see the results of a different strategy.
 */
import { LazyLoadedStylesModule as StyleModule, EntryPointComponent } from '@web-bling/lazy-loaded-styles';
// import { BundledStylesModule as StyleModule, EntryPointComponent } from '@web-bling/bundled-styles';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StyleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private _injector: Injector) {
    const library = new Map([
      ['wc-entry', EntryPointComponent],
    ]);
    for (const [name, comp] of library) {
      const webComponent = createCustomElement(comp, {injector: this._injector});
      customElements.define(name, webComponent);
    }
  }
}
