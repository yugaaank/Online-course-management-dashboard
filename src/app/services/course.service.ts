import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../models/data-models';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    { id: 1, title: 'Angular Fundamentals', instructor: 'John Doe', duration: '6 Weeks', seats: 2, price: 99.99, startDate: new Date('2026-04-01') },
    { id: 2, title: 'TypeScript Basics', instructor: 'Jane Smith', duration: '4 Weeks', seats: 15, price: 49.99, startDate: new Date('2026-04-15') },
    { id: 3, title: 'Web Development', instructor: 'Alex Johnson', duration: '8 Weeks', seats: 5, price: 149.99, startDate: new Date('2026-05-01') },
    { id: 4, title: 'Advanced Angular', instructor: 'Michael Brown', duration: '5 Weeks', seats: 1, price: 199.99, startDate: new Date('2026-06-10') },
  ];

  getCourses(): Observable<Course[]> {
    return of(this.courses);
  }

  getCourseByTitle(title: string): Observable<Course | undefined> {
    return of(this.courses.find(c => c.title === title));
  }
}
