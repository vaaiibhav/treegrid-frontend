import { Component, ViewChild, ElementRef } from '@angular/core';
import { AngularTreeGridComponent } from 'angular-tree-grid';

@Component({
  selector: 'app-filter-grid',
  templateUrl: 'htmls/dynamicChildren.component.html'
})
export class DynamicChildrenComponent {
  @ViewChild('angularGrid') angularGrid: AngularTreeGridComponent;
  data: any[] = [
    { id: 1, name: 'Prakash', age: 60, weight: 60, gender: 1, phone: 7930343463},
    { id: 2, name: 'Aditya', age: 40, weight: 90, gender: 1, phone: 7930343463}
  ];

    configs: any = {
    id_field: 'id',
    parent_id_field: 'parent',
    parent_display_field: 'name',
    load_children_on_expand: true,
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
    ]
    };

  onExpand(e) {
    const row_data = e.data;
    if (row_data.id === 1) {
      setTimeout(() => {
        e.resolve([{ id: 4, name: 'Ashok', age: 60, weight: 60, gender: 1, phone: 7930343463, leaf_node: true},
          { id: 5, name: 'Sam', age: 40, weight: 60, gender: 1, phone: 7930343463},
          { id: 6, name: 'Sriya', age: 36, weight: 60, gender: 1, phone: 7930343463}]);
      }, 2000);
    } else if (row_data.id === 4){
      setTimeout(() => {
        e.resolve([{ id: 7, name: 'Ashok', age: 60, weight: 60, gender: 1, phone: 7930343463},
          { id: 8, name: 'Sam', age: 40, weight: 60, gender: 1, phone: 7930343463},
          { id: 9, name: 'Sriya', age: 36, weight: 60, gender: 1, phone: 7930343463}]);
      }, 2000);
    }
  }

  collapseAll() {
    this.angularGrid.collapseAll();
  }

  expandAll() {
    this.angularGrid.expandAll();
  }

    @ViewChild('iframe') iframe: ElementRef;
    gistUrl: String = "https://gist.github.com/debabratapatra/ff0cc1219a08a9e8737ab42ca4b17d56.js";

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