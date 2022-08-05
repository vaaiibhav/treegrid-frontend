
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the TreeGridModule for the TreeGrid component
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of ej2-angular-treegrid module into NgModule
  imports:      [ BrowserModule, TreeGridModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }