import { useState } from "react";

interface EducationObject {
  schoolName: string;
  degree: string;
  startDate: string;
  endDate: string;
}

interface InputEducation {
  education: EducationObject;
  handleSchoolName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDegree: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleStartDate: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEndDate: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputEducation({
  education,
  handleSchoolName,
  handleDegree,
  handleStartDate,
  handleEndDate,
}: InputEducation) {
  return (
    <form>
      <div>
        <label>School Name: </label>
        <input type="text" />
      </div>

      <div>
        <label>Degree: </label>
        <input type="text" />
      </div>

      <div>
        <label>Start Date: </label>
        <input type="text" />
      </div>

      <div>
        <label>End Date: </label>
        <input type="text" />
      </div>

      <button type="submit">Save</button>
    </form>
  );
}

function Education() {
  const educationObject: EducationObject = {
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: "",
  };

  const [education, setEducation] = useState(educationObject);
  const [educationList, setEducationList] = useState([]);

  return (
    <div>
      <h2>Education</h2>
      <InputEducation education={education} />
    </div>
  );
}

export default Education;
