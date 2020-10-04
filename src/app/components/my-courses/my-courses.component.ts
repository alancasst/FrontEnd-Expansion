import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../../shared/user.service';
import { courseService } from '../../services/course.service';
import { Course } from '../../models/courses';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css'],
  providers: [courseService]
})
export class MyCoursesComponent implements OnInit {

  userDetails;
  public name : string;
  public course_id;

  constructor(public userService: UserService, private router: Router,
    private _route: ActivatedRoute,private _courseService : courseService) { }

  ngOnInit(){
    
    this.userService.getUserProfile().subscribe(
      res=> { 
  
        this.userDetails = res['user'];
        this.name = this.userDetails.actualCourse;
        this.getCourseByName(this.name);
      },
      err=> {
        console.log(err);
      }
    );
   
  }

  onLogOut(){
    this.userService.deleteToken();
    this.router.navigate(['/Login']);
  }

  getCourseByName(name){
    this._courseService.getCoursebyName(name).subscribe(
      response=>{
        if (response.course){
          
         
          this.course_id = response.course.id;
          
         
        }
      },
      err=>{
        console.log(err);
      });
    }

}
