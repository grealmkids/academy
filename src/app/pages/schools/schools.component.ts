import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-schools',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent {
  isLocal = true; // Default to Ugandan catalog

  toggleCatalog(isLocal: boolean) {
    this.isLocal = isLocal;
  }

  showEmailPopup() {
    const email = 'academy@grealm.org';
    Swal.fire({
      title: 'Enroll via Email',
      html: `
        <p>You can send us an email at:</p>
        <p><strong>${email}</strong></p>
      `,
      showCloseButton: true,
      showConfirmButton: true,
      confirmButtonText: `
        <i class="bi bi-clipboard"></i> Copy Email
      `,
      confirmButtonAriaLabel: 'Copy email address',
    }).then((result) => {
      if (result.isConfirmed) {
        navigator.clipboard.writeText(email).then(() => {
          Swal.fire({
            title: 'Copied!',
            text: 'Email address copied to clipboard.',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
          });
        });
      }
    });
  }
}
