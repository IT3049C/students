import { StudentProps, Student } from "./student";

export interface SemesterProps {
  name: string;
  students: StudentProps[];
}
export const Semester: React.FC<SemesterProps> = (semester) => {
  return (
    <div className="container">
      <div className="row">
      <h3>
        {semester.name}
      </h3>
      {
        semester.students.map((student, index) => (<Student key={index} {...student} />))
      }
      </div>
    </div>
  )
}