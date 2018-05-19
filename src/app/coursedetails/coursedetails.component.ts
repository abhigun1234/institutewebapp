import { Component, OnInit } from '@angular/core';
import {CourseService} from '..//course.service';
@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css'],
  providers: [CourseService]
})
export class CoursedetailsComponent implements OnInit {
   coursedetails;
  constructor(private  courseservice: CourseService) {

  }

  ngOnInit() {
  }
  getCourseDetails() {
    this.coursedetails = this.courseservice.getCourseDetails();
    console.log(this.coursedetails);
  }

}
