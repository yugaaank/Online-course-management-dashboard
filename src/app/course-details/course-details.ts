import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { CourseService } from '../services/course.service';
import { Course } from '../models/data-models';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, MatButtonModule, MatToolbarModule],
  templateUrl: './course-details.html',
  styleUrl: './course-details.scss',
})
export class CourseDetails implements OnInit {
  courseTitle = '';
  course: Course | undefined;

  constructor(private route: ActivatedRoute, private courseService: CourseService) {
    this.courseTitle = this.route.snapshot.paramMap.get('title') || '';
  }

  ngOnInit() {
    this.courseService.getCourseByTitle(this.courseTitle).subscribe(data => {
      this.course = data;
    });
  }
}
