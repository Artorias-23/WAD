import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Needed for ngModel
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}

//Open terminal/command prompt and type:
//ng version

//create new angular project
//ng new todo-app
//Press Enter for all default options (or type n for routing, and select CSS).

//cd todo-app

//replace files with these

//run
//ng serve

//http://localhost:4200

