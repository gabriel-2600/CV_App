import type { EducationObject } from "./Education";

interface OutputEducationProps {
  educationList: EducationObject[];
}

function OutputEducation({ educationList }: OutputEducationProps) {
  return (
    <div>
      {educationList.map((education) => (
        <div key={education.id}>
          <p>{education.schoolName}</p>
          <p>{education.degree}</p>
          <p>{education.startDate}</p>
          <p>{education.endDate}</p>
        </div>
      ))}
    </div>
  );
}

export default OutputEducation;
