import { InjectionToken } from '@angular/core';
import { StyleResolver } from './types';

export const STYLE_RESOLVER = new InjectionToken<StyleResolver.ResolveStyles>('Promise that fires when lazy styles are finished loading.');
