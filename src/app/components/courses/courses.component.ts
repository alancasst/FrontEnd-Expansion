import { Component, OnInit } from '@angular/core';
import { courseService } from '../../services/course.service';
import {environment} from '../../../environments/environment';
import { Course } from '../../models/courses';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [courseService]

})
export class CoursesComponent implements OnInit {

    public courses: Course[];

  constructor(
    private _courseService : courseService
  ) { }

  ngOnInit(): void {
    this.getCourses();
    }

  getCourses(){
    this._courseService.getCourses().subscribe(
      res =>{
          if (res.courses){
            this.courses = res.courses;
          }
      },
      err =>{
          console.log(err);
      }
      
    )
  }

}
