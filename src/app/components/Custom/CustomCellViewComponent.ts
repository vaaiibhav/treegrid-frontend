import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-cell-component',
  template: `
    <b>{{cell_value}}</b>
  `,
})
export class CustomCellViewComponent {
  @Input()
  column: any;

  @Input()
  cell_value: string;

}
