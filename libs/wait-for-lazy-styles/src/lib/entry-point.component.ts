import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { STYLE_RESOLVER, StyleResolver, StyleResolverProvider } from '@web-bling/resolve-styles';

@Component({
  selector: 'wb-lazy-loaded-entry-point',
  templateUrl: './entry-point.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
  providers: [
    StyleResolverProvider(['/global.css', '/header-span.css', '/input.css'])
  ]
})
export class EntryPointComponent {
  public hidden = true;

  constructor(@Inject(STYLE_RESOLVER) private _resolve: StyleResolver.ResolveStyles) {
    this._resolve
      .then(() => this.hidden = false)
      .catch(() => this.hidden = false);
  }
}
