import { Component, ViewChild, ElementRef } from '@angular/core';
import {CustomCellViewComponent} from './../Custom/CustomCellViewComponent';

@Component({
  selector: 'app-subgrid-grid',
  templateUrl: 'htmls/subgrid.component.html'
})
export class SubgridComponent {
    data: any[] = [
      { id: 1, name: 'Sriya', age: 60, weight: 60, gender: 1, phone: 7930343463},
      { id: 2, name: 'Sneha', age: 40, weight: 90, gender: 1, phone: 7930343463}
    ];
    subgrid_1: any = [
      { technology_id: 1, type: 'Web', technology: 'Angular', experience: 2, parent: 1},
      { technology_id: 2, type: 'Web', technology: 'HTML5', experience: 3, parent: 1},
      { technology_id: 3, type: 'Web', technology: 'CSS3', experience: 2, parent: 1},
      { technology_id: 4, type: 'Web', technology: 'Javascript', experience: 6, parent: 1},
    ];

    subgrid_2: any = [
      { technology_id: 5, type: 'Web', technology: 'Angular', experience: 3, parent: 2},
      { technology_id: 6, type: 'Web', technology: 'HTML5', experience: 3, parent: 2},
      { technology_id: 7, type: 'Web', technology: 'CSS3', experience: 2, parent: 2},
      { technology_id: 8, type: 'Web', technology: 'Javascript', experience: 8, parent: 2},
    ];

    configs: any = {
    id_field: 'id',
    multi_select: true,
    parent_display_field: 'name',
    css: { // Optional
      expand_class: 'fa fa-caret-right',
      collapse_class: 'fa fa-caret-down',
    },
    columns: [
      {
        name: 'name',
        header: 'Name',
        editable: true
      },
      {
        name: 'age',
        header: 'Age',
        editable: true,
        renderer: function(value) {
          return value + ' years';
        }
      },
      {
        name: 'weight',
        header: 'Weight'
      },
      {
        name: 'gender',
        header: 'Gender',
        renderer: function(value) {
          return value ? 'Male' : 'Female';
        }
      },
      {
        name: 'phone',
        header: 'Phone'
      }
    ],
    subgrid: true,
    subgrid_config: {
      id_field: 'technology_id',
      show_summary_row: true,
      columns: [
        {
          name: 'type',
          header: 'Type'
        },
        {
          name: 'technology',
          header: 'Technology',
          type: 'custom',
          sortable: true,
          component: CustomCellViewComponent,
          summary_renderer: () => {
            return '<b>Total:</b>';
          }
        },
        {
          name: 'experience',
          header: 'Experience',
          sortable: true,
          renderer: function(value) {
            return value + ' years';
          },
          summary_renderer: (data) => {
            return data.map(rec => rec.experience).reduce((a, b) => a + b, 0) + ' years';
          }
        }
      ]
    }
    };

    onExpand(e) {
      const row_data = e.data;
      if (row_data.id === 1) {
        e.resolve(this.subgrid_1);
      } else {
        e.resolve(this.subgrid_2);
      }
    }

    @ViewChild('iframe') iframe: ElementRef;
    gistUrl: String = "https://gist.github.com/debabratapatra/d6b44d0a02efe123ef9a122860e0ed9f.js";

    ngAfterViewInit() {
      const doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
        const content = `
            <html>
            <head>
              <base target="_parent">
            </head>
            <body>
            <script type="text/javascript" src="${this.gistUrl}"></script>
            </body>
          </html>
        `;
        doc.open();
        doc.write(content);
        doc.close();
    }
}