import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; // Import Swal

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Include HttpClientModule here
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];

  private apiUrl = '/courses.json';
  private  jsonUrl= 'http://localhost:8081/courses/all';

  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit(): void {
    this.http.get(this.apiUrl).subscribe((res: any) => {
      this.courses = res.courses; // Adjusted to match the JSON structure
    });
  }

  viewDetails(courseId: number): void {
    this.router.navigate(['/course-detail', courseId]);
  }

  playVideo(videoUrl: string): void {
    // Assuming videoUrl is a YouTube watch URL, convert to embed URL
    let embedUrl = videoUrl;
    if (videoUrl.includes('youtube.com/watch?v=')) {
      embedUrl = videoUrl.replace('watch?v=', 'embed/');
    } else if (videoUrl.includes('youtu.be/')) {
      embedUrl = videoUrl.replace('youtu.be/', 'youtube.com/embed/');
    }

    Swal.fire({
      html: `
        <div class="video-responsive">
          <iframe
            src="${embedUrl}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      `,
      showConfirmButton: false,
      showCloseButton: true,
      background: 'var(--brand-black)', // Dark background for modal
      customClass: {
        popup: 'swal-video-modal',
        closeButton: 'swal-video-close-button'
      }
    });
  }
}
