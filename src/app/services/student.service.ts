import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../models/data-models';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    { id: 1, name: 'Alice Walker', email: 'alice@example.com', department: 'Computer Science', enrolledDate: new Date('2025-09-01') },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', department: 'Information Technology', enrolledDate: new Date('2025-09-15') },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', department: 'Mathematics', enrolledDate: new Date('2025-10-01') },
  ];

  getStudents(): Observable<Student[]> {
    return of(this.students);
  }

  addStudent(student: Omit<Student, 'id' | 'enrolledDate'>): Observable<Student> {
    const newStudent: Student = {
      ...student,
      id: this.students.length + 1,
      enrolledDate: new Date()
    };
    this.students.push(newStudent);
    return of(newStudent);
  }
}
