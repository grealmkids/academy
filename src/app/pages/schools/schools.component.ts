import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
}
