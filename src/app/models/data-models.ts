export interface Course {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  seats: number;
  price: number;
  startDate: Date;
}

export interface Student {
  id: number;
  name: string;
  email: string;
  department: string;
  enrolledDate: Date;
}

export interface Enrollment {
  id: number;
  studentId: number;
  courseId: number;
  enrollmentDate: Date;
}
