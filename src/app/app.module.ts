import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { StudentsdetailsComponent } from './studentsdetails/studentsdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursedetailsComponent,
    StudentsdetailsComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
