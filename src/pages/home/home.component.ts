import { Component, OnInit} from '@angular/core';
import { CoursesComponent } from "../../components/courses/courses.component";
import { NavigationService } from '../../app/navigation.service';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [CoursesComponent]
})
export class HomeComponent implements OnInit {
  
    constructor(private navigationService:NavigationService) {}
  
ngOnInit(): void {
}

navigateToTutor(){
   this.navigationService.navigateToTutor(); 
}
navigateToSms(){
    this.navigationService.navigateToSms(); 
 }
 navigateToCard(){
  this.navigationService.navigateToCard(); 
}
navigateToReceipt(){
  this.navigationService.navigateToReceipt(); 
}
navigateToTestimonies(){
  this.navigationService.navigateToTestimonies(); 
}
}
