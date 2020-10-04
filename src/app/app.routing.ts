import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';


import {AuthGuard} from './auth/auth.guard';


const appRoutes: Routes = [
    {path:'', component: HomeComponent},
    {path:'How_it_works', component: HowItWorksComponent},
    {path:'Courses', component: CoursesComponent},
    {path:'Contact', component: ContactComponent},
    {path:'Error', component: ErrorComponent},
    {path:'Login', component: LoginComponent},
    {path:'Sign-Up', component: SignUpComponent},
    {path:'My-Courses', component: MyCoursesComponent,canActivate:[AuthGuard] },
    {path:'My-Course', component:QuestionsComponent,canActivate:[AuthGuard] },
    {path:'Course/:id', component:CourseDetailComponent },
    

    
];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
