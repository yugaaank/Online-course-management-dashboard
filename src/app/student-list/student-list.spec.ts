import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentListComponent } from './student-list';
import { StudentService } from '../services/student.service';
import { of } from 'rxjs';

describe('StudentListComponent', () => {
  let component: StudentListComponent;
  let fixture: ComponentFixture<StudentListComponent>;
  let studentService: jasmine.SpyObj<StudentService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('StudentService', ['getStudents']);
    spy.getStudents.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [StudentListComponent],
      providers: [{ provide: StudentService, useValue: spy }]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentListComponent);
    component = fixture.componentInstance;
    studentService = TestBed.inject(StudentService) as jasmine.SpyObj<StudentService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
