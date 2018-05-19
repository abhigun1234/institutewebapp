import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
@Injectable()
export class CourseService {

  constructor(private http: Http) {

  }
  /*getCourseDetails(): Observable<any> {
     alert('hello');
    return this.http.get('https://myflaskappinheroku.herokuapp.com/coursedetails').map(res => {
        const data = res.json();
        console.log(data[0]);
        alert(data[0]);
        return data;
        });
  }*/
        public getCourseDetails()  {

          this.http.get('https://myflaskappinheroku.herokuapp.com/coursedetails').subscribe(res =>{
            const data = res.json();
            alert(data);
            console.log(data['courses'][0]);
          }
          );

  }

}
