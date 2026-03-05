import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { Course } from '../models/data-models';
import { FilterPipe } from '../pipes/filter.pipe';
import { HighlightSeatsDirective } from '../directives/highlight-seats.directive';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    FilterPipe,
    HighlightSeatsDirective
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent implements OnInit {
  courses: Course[] = [];
  searchText: string = '';
  
  totalStudents = 340;
  activeInstructors = 8;
  totalCourses = 0;

  constructor(private router: Router, private courseService: CourseService) {}  

  ngOnInit() {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
      this.totalCourses = data.length;
    });
  }
  
  enroll(courseTitle: string) {
    this.router.navigate(['/enroll'], { queryParams: { course: courseTitle } });
  }

  viewDetails(courseTitle: string) {
    this.router.navigate(['/course', courseTitle]);
  }
}
