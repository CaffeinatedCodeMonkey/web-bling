import { ElementRef } from '@angular/core';
import { StyleResolver } from './types';
import { STYLE_RESOLVER } from './style-resolver.token';

/**
 * We are using a provider definition because an Injection Token factory does not allow
 * for dependencies from a specific injector. This means that you do not have access
 * to the ElementRef, which is necessary for adding link tags to the template.
 */
export function StyleResolverProvider(styleSheetUrls: string[]) {
  return {
    provide: STYLE_RESOLVER,
    useFactory: makeStyleResolverFactory(styleSheetUrls),
    deps: [ElementRef]
  }
}

function makeStyleResolverFactory(styleSheetUrls: string[]): (...args: any[]) => StyleResolver.ResolveStyles {
  return (el: ElementRef) => {
    // element = component's shadowRoot || ancestral shadowRoot || document.
    const element = el?.nativeElement?.shadowRoot || el?.nativeElement?.getRootNode({composed: false});
    const promises = styleSheetUrls.map(s => loadStyleSheet(element, s));
    return Promise
      .all(promises)
      .then(results => results.reduce((p, c) => c && p, true));
  };
}

function loadStyleSheet(element: HTMLElement, styleSheetUrl: string): StyleResolver.ResolveStyles {
  return new Promise<StyleResolver.Success>((resolve, reject) => {
    const link = document.createElement('link');
    link.href = styleSheetUrl;
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.onload = () => resolve(true);
    link.onabort = () => resolve(false);
    link.onerror = (e) => reject(e);
    element.append(link);
  });
}
