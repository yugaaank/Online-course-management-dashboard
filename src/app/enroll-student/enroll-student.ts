import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-enroll-student',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    MatSnackBarModule
  ],
  template: `
    <div class="container" style="padding: 24px; max-width: 600px; margin: 0 auto;">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Course Enrollment</mat-card-title>
          <mat-card-subtitle *ngIf="selectedCourse">Enrolling in: {{ selectedCourse }}</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <form [formGroup]="enrollForm" (ngSubmit)="onSubmit()" style="display: flex; flex-direction: column; gap: 16px; margin-top: 16px;">
            <mat-form-field appearance="outline">
              <mat-label>Student Name</mat-label>
              <input matInput formControlName="name">
              <mat-error *ngIf="enrollForm.get('name')?.hasError('required')">Name is required</mat-error>
              <mat-error *ngIf="enrollForm.get('name')?.hasError('minlength')">Minimum 3 characters</mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Email Address</mat-label>
              <input matInput formControlName="email">
              <mat-error *ngIf="enrollForm.get('email')?.hasError('required')">Email is required</mat-error>
              <mat-error *ngIf="enrollForm.get('email')?.hasError('email')">Invalid email format</mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Department</mat-label>
              <input matInput formControlName="department">
              <mat-error *ngIf="enrollForm.get('department')?.hasError('required')">Department is required</mat-error>
            </mat-form-field>

            <button mat-raised-button color="primary" type="submit" [disabled]="enrollForm.invalid">
              Confirm Enrollment
            </button>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `
})
export class EnrollStudentComponent implements OnInit {
  enrollForm: FormGroup;
  selectedCourse: string | null = null;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.enrollForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.selectedCourse = this.route.snapshot.queryParamMap.get('course');
  }

  onSubmit() {
    if (this.enrollForm.valid) {
      this.studentService.addStudent(this.enrollForm.value).subscribe(() => {
        this.snackBar.open('Enrollment Successful!', 'Close', { duration: 3000 });
        this.router.navigate(['/students']);
      });
    }
  }
}
