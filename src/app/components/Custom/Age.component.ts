import { Component, OnInit, Input } from '@angular/core';
import {DefaultEditor} from 'angular-tree-grid';

@Component({
  selector: 'app-custom-editor',
  template: `
    <input 
    type="number" 
    [(ngModel)]="row_data[column.name]" 
    (keydown.enter)="editcomplete.emit($event)"
    (keydown.esc)="canceledit.emit($event)">
  `,
})
export class AgeComponent extends DefaultEditor {
  @Input()
  cell_value: string;

  @Input()
  row_data: any;

  @Input()
  column: any;

  constructor() {
    super();
  }

  ngOnInit() {
  }
}