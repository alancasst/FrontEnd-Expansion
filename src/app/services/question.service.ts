import { Injectable } from '@angular/core';
import { Course } from '../models/courses';
import{HttpClient , HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class questionService{
    public url : string;
    noAuthHeader = {headers: new HttpHeaders({'NoAuth': 'True'})};
    constructor(
        private _http : HttpClient
    ){
        this.url = environment.apiBaseUrl;
    }
   
     
    getQuestionsByNumberAndCourse(number, course): Observable<any>{
        return this._http.get(environment.apiBaseUrl+'/questions/'+number+"/"+course,this.noAuthHeader);

    }
   
}