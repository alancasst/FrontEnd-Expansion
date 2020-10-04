import { Injectable } from '@angular/core';
import { Course } from '../models/courses';
import{HttpClient , HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class courseService{
    public url : string;
    noAuthHeader = {headers: new HttpHeaders({'NoAuth': 'True'})};
    constructor(
        private _http : HttpClient
    ){
        this.url = environment.apiBaseUrl;
    }
    getCourses(): Observable<any>{
        return this._http.get(environment.apiBaseUrl+'/Courses',this.noAuthHeader);
    }
   
    getCourse(id): Observable<any>{
        return this._http.get(environment.apiBaseUrl+'/course/'+id,this.noAuthHeader);

    }
     
    getCoursebyName(name): Observable<any>{
        return this._http.get(environment.apiBaseUrl+'/course-name/'+name,this.noAuthHeader);

    }
   
}
