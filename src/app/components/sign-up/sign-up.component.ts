import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],

})
export class SignUpComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSuccesMessage: boolean;
  serverErrorMessage: String;
  constructor(public userService: UserService ) { }

  ngOnInit(): void {

    this.getCourses();
  }

  onSubmit(form: NgForm){
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSuccesMessage = true;
        setTimeout(()=>this.showSuccesMessage = false,4000);
        this.resetForm(form);
      },
      err => {
        if (err.status == 422){
          this.serverErrorMessage = err.error.join('<br/>');
        } else {
          this.serverErrorMessage = 'Algo salío mal, contactar a soporte';
        }
      }

    );
  }
  resetForm(form: NgForm){
    this.userService.selectedUser = {
      name: '',
      lastname: '',
      email:'' ,
      genre:'' ,
      password: '',
      address: '',
      city:'' ,
      state:'',
      cp: 0,
      country:'',
      actualCourse:'',
      actualNoLesson: 0
    };
    form.resetForm();
    this.serverErrorMessage='';
  }
  getCourses(){
    this.userService.getCourses().subscribe(
      res =>{
          console.log(res);
      },
      err =>{
          console.log("ERRRRRROR2");
      }
      
    )
  }

}
