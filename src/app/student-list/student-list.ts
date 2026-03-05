import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { StudentService } from '../services/student.service';
import { Student } from '../models/data-models';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  template: `
    <div class="container" style="padding: 24px">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Registered Students</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <table mat-table [dataSource]="students" class="mat-elevation-z8" style="width: 100%">
            <ng-container matColumnDef="name">
              <th mat-header-cell *matHeaderCellDef> Name </th>
              <td mat-cell *matCellDef="let element"> {{element.name}} </td>
            </ng-container>

            <ng-container matColumnDef="email">
              <th mat-header-cell *matHeaderCellDef> Email </th>
              <td mat-cell *matCellDef="let element"> {{element.email}} </td>
            </ng-container>

            <ng-container matColumnDef="department">
              <th mat-header-cell *matHeaderCellDef> Department </th>
              <td mat-cell *matCellDef="let element"> {{element.department}} </td>
            </ng-container>

            <ng-container matColumnDef="date">
              <th mat-header-cell *matHeaderCellDef> Enrolled Date </th>
              <td mat-cell *matCellDef="let element"> {{element.enrolledDate | date}} </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
          </table>
        </mat-card-content>
      </mat-card>
    </div>
  `
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  displayedColumns: string[] = ['name', 'email', 'department', 'date'];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.getStudents().subscribe(data => this.students = data);
  }
}
