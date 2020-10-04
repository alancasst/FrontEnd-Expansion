import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { UserComponent } from './components/user/user.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './shared/user.service';
import { courseService } from './services/course.service';
import {AuthGuard} from './auth/auth.guard';
import {AuthInterceptor} from './auth/auth.interceptor';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HowItWorksComponent,
    CoursesComponent,
    ContactComponent,
    ErrorComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    MyCoursesComponent,
    QuestionsComponent,
    UserComponent,
    CourseDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
  },
    appRoutingProviders,
    UserService,
    AuthGuard,
  

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
