import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-edit-resolver-tree-grid',
  templateUrl: 'htmls/resolver.component.html'
})
export class EditDeleteResolverComponent {
  data: any[] = [
    { id: 1, name: 'Bimal', age: 60, weight: 60, gender: 1, phone: 7930343463, parent: 0},
    { id: 2, name: 'Bhagi', age: 40, weight: 90, gender: 1, phone: 7930343463, parent: 1},
    { id: 3, name: 'Kalyana', age: 36, weight: 70, gender: 1, phone: 7930343463, parent: 1},
    { id: 4, name: 'Prakash', age: 20, weight: 20, gender: 1, phone: 7930343463, parent: 2},
    { id: 5, name: 'Jitendra', age: 21, weight: 60, gender: 1, phone: 7930343463, parent: 3},
    { id: 6, name: 'Sunil', age: 60, weight: 80, gender: 1, phone: 7930343463, parent: 34},
    { id: 7, name: 'Aditya', age: 40, weight: 60, gender: 1, phone: 7930343463, parent: 6},
    { id: 8, name: 'Suraj', age: 36, weight: 60, gender: 1, phone: 7930343463, parent: 6},
    { id: 9, name: 'Swarup', age: 20, weight: 40, gender: 1, phone: 7930343463, parent: 8},
    { id: 10, name: 'Lakin', age: 21, weight: 55, gender: 1, phone: 7930343463, parent: 8},
  ];

    configs: any = {
    id_field: 'id',
    parent_id_field: 'parent',
    parent_display_field: 'name',
    css: { // Optional
      expand_class: 'fa fa-caret-right',
      collapse_class: 'fa fa-caret-down',
      add_class: 'fa fa-plus',
    },
    actions: {
      add: true,
      edit: true,
      delete: true,
      edit_parent: true,
      resolve_add: true,
      resolve_delete: true,
      resolve_edit: true
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
        header: 'Phone',
        width: '150px'
      }
    ]
    };

    onRowAdd($e) {
      const data = $e.data;
      setTimeout(() => {
        $e.resolve();
      }, 1000);      
    }

    onRowSave($e) {
      const data = $e.data;
      setTimeout(() => {
        $e.resolve();
      }, 1000);
    }

    onRowDelete($e) {
      const data = $e.data;
      setTimeout(() => {
        $e.resolve();
      }, 1000);
    }

    @ViewChild('iframe') iframe: ElementRef;
    gistUrl: String = "https://gist.github.com/debabratapatra/ffc4361127e89fac234ef93ed1645eab.js";

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