import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testimonies',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.css']
})
export class TestimoniesComponent implements OnInit {
  academyVisitorCount: number = 0;
  title = '';
  newcount:number=0;
  students: any[] = [];
  private url = '/testimonies.json';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Fetch testimonies data
    this.fetchTestimonies();

  }

  // Fetch the testimonies data from the JSON file
  fetchTestimonies(): void {
    this.http.get(this.url).subscribe({
      next: (res: any) => {
        this.students = res.students;
        console.log('Testimonies fetched:', res.students);
      },
      error: (err) => {
        console.error('Failed to fetch testimonies data:', err);
      }
    });
  }




}
