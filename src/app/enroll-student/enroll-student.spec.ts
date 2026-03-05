import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnrollStudentComponent } from './enroll-student';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { of } from 'rxjs';

describe('EnrollStudentComponent', () => {
  let component: EnrollStudentComponent;
  let fixture: ComponentFixture<EnrollStudentComponent>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('StudentService', ['addStudent']);

    await TestBed.configureTestingModule({
      imports: [EnrollStudentComponent, ReactiveFormsModule],
      providers: [
        { provide: StudentService, useValue: spy },
        provideRouter([]),
        provideAnimationsAsync()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EnrollStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
