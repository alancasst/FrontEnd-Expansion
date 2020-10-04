import { Component, OnInit } from '@angular/core';
import { courseService } from '../../services/course.service';
import {environment} from '../../../environments/environment';
import { Course } from '../../models/courses';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
  providers:[courseService]
})
export class CourseDetailComponent implements OnInit {

  public course : Course;
  constructor(private _courseService : courseService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {

  this._route.params.subscribe(
    params=>{
      let id = params.id;
      this.getCourse(id);
    }
  );
  }

  getCourse(id){
      this._courseService.getCourse(id).subscribe(
        response=>{
            this.course = response.course;
        },
        err=>{
          console.log(err);
        });
      }
  }


