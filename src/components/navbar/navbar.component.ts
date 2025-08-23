import { Component } from '@angular/core';
import { NavigationService } from '../../app/navigation.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'; // Import Swal

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

showLogin:boolean=false;
showLogout:boolean=false;
showSignup:boolean=false;
constructor(private navigationService:NavigationService) {};
navigateToHome(): void {
  this.navigationService.navigateToHome();
}

navigateToTutor(): void {
  this.navigationService.navigateToTutor();
}

navigateToCard(): void {
  this.navigationService.navigateToCard();
}
navigateToReceipt(): void {
  this.navigationService.navigateToReceipt();
}

navigateToSms(): void {
  this.navigationService.navigateToSms();
}

navigateToSignup(): void {
  this.navigationService.navigateToSignup();
}

navigateToLogin(): void {
  this.navigationService.navigateToLogin();
}
navigateTocreate(): void {
  this.navigationService.navigateTocreate();
}
navigateToDrills():void{
  this.navigationService.navigateToDrills();
}
navigateToTestimonies():void{
  this.navigationService.navigateToTestimonies();
}

navigateToSchools(): void {
  this.navigationService.navigateToSchools();
}

confirmNavigateToStudio(): void {
  Swal.fire({
    title: 'Visit G-Realm Studio Official Website?',
    text: 'Do you want to leave this site and visit G-Realm Studio\'s official website?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: 'var(--brand-green)', // Light green background
    confirmButtonText: 'Yes, visit!',
    customClass: {
      confirmButton: 'swal-confirm-button',
      cancelButton: 'swal-cancel-button'
    },
    cancelButtonColor: 'var(--brand-blue)', // Our blue background
    cancelButtonText: 'No, stay here'
  }).then((result) => {
    if (result.isConfirmed) {
      window.open('http://grealm.org', '_blank'); // Open in new tab
    }
  });
}

}
