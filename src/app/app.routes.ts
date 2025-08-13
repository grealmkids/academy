import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { LayoutComponent } from '../pages/layout/layout.component';
import { TutorComponent } from '../pages/tutor/tutor.component';
import { HomeComponent } from '../pages/home/home.component';
import { SignupComponent } from '../pages/signup/signup.component';
import { CourseDetailsComponent } from '../pages/course-details/course-details.component';
import { TestimoniesComponent } from '../pages/testimonies/testimonies.component';
import { BooksComponent } from './books/books.component';


export const routes: Routes = [
  
    {
        path:'',
        redirectTo:'',
        pathMatch:'full'
    },
  
    { path: 'course-detail/:id', component: CourseDetailsComponent },
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {path:'books',component:BooksComponent},
    {
        path:'signup',
        component:SignupComponent
    },
   
    {
        path:'testimonies',
        component:TestimoniesComponent
    },
    {
        path:'tutor',
        component:TutorComponent
    },
  

    {
      path:'',
      component:LayoutComponent,
      children:[
       { path:'',
        component:HomeComponent
       }
      ]  
    }
];

