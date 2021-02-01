import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'wb-bundled-entry-point',
  styleUrls: ['./entry-point.component.scss'],
  templateUrl: './entry-point.component.html',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class EntryPointComponent {}
