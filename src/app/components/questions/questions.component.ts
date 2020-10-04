import { Component, OnInit } from '@angular/core';
import { courseService } from '../../services/course.service';
import {environment} from '../../../environments/environment';
import { Course } from '../../models/courses';
import { Question } from '../../models/question';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../shared/user.service';
import { questionService } from '../../services/question.service';
import { NgForm } from '@angular/forms';
import { answerService} from '../../services/answer.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers: [courseService, questionService,answerService]
})
export class QuestionsComponent implements OnInit {

  public course : Course;
  public question : Question;
  userDetails
  actualCourse: string;
  actualLesson: number;
  public Questions : String [];
  inputTexts: string[] = [];
  public tempVal = {};
  

  constructor(private _courseService : courseService,
    private _questionService : questionService,
    public _answerService : answerService,
    private _router: Router,
    private _route: ActivatedRoute,public userService: UserService) { }

  ngOnInit(): void {
   
    this.userService.getUserProfile().subscribe(
      res=> { 
       this.userDetails = res['user'];
        this.getQuestionsByNumberAndCourse(this.userDetails.actualNoLesson,this.userDetails.actualCourse); 
        this.actualLesson = this.userDetails.actualNoLesson;
        this.actualCourse = this.userDetails.actualCourse;
        
     

      },
      err=> {
        console.log(err);
      }
    );   
  }



  public addnewAnswer(value) {
    console.log("VAL", value);
 }













  onSubmit(form: NgForm){
    console.log("quepdo");

    this._answerService.postAnswer(form.value).subscribe(
      res => {
       console.log(res);
      },
      err => {
        if (err.status == 422){
          console.log(err)
         
      }

    });
    }


getQuestionsByNumberAndCourse(number,course){
  this._questionService.getQuestionsByNumberAndCourse(number,course).subscribe(
    response=>{
      this.Questions = response['question'];
      
    },
    err=>{
      console.log(err);
    }
  )
  
}

}
