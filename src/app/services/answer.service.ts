import { Injectable } from '@angular/core';
import{HttpClient , HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import { Answer } from '../models/answer';

@Injectable()
export class answerService{

    selectedAnswer: Answer ={
        lesson: 0,
        answer: [""],
        course: '',
        user:''
      };



    public url : string;
    noAuthHeader = {headers: new HttpHeaders({'NoAuth': 'True'})};
    constructor(
        private _http : HttpClient
    ){
        this.url = environment.apiBaseUrl;
    }

    postAnswer(answer: Answer){
        return this._http.post(environment.apiBaseUrl+'/save-answer',answer);
      }
   
   
}