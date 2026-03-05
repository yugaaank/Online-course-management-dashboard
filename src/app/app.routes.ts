import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { CourseDetails } from './course-details/course-details';
import { StudentListComponent } from './student-list/student-list';
import { EnrollStudentComponent } from './enroll-student/enroll-student';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'course/:title', component: CourseDetails },
  { path: 'students', component: StudentListComponent },
  { 
    path: 'enroll', 
    component: EnrollStudentComponent,
    canActivate: [AuthGuard] // Demonstrating route guard as required
  }
];
