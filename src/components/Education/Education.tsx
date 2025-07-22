import { useState } from "react";

interface EducationObject {
  id: string;
  schoolName: string;
  degree: string;
  startDate: string;
  endDate: string;
}

interface InputEducationProps {
  education: EducationObject;
  handleChange: (key: keyof EducationObject, value: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function InputEducation({
  education,
  handleChange,
  handleSubmit,
}: InputEducationProps) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>School Name: </label>
        <input
          type="text"
          required
          value={education.schoolName}
          onChange={(event) => handleChange("schoolName", event.target.value)}
        />
      </div>

      <div>
        <label>Degree: </label>
        <input
          type="text"
          required
          value={education.degree}
          onChange={(event) => handleChange("degree", event.target.value)}
        />
      </div>

      <div>
        <label>Start Date: </label>
        <input
          type="text"
          value={education.startDate}
          onChange={(event) => handleChange("startDate", event.target.value)}
        />
      </div>

      <div>
        <label>End Date: </label>
        <input
          type="text"
          value={education.endDate}
          onChange={(event) => handleChange("endDate", event.target.value)}
        />
      </div>

      <button type="submit">Save</button>
    </form>
  );
}

interface OutputEducationProps {
  educationList: EducationObject[];
}

function OutputEducation({ educationList }: OutputEducationProps) {
  return (
    <div>
      {educationList.map((education) => (
        <div>
          <p>{education.schoolName}</p>
          <p>{education.degree}</p>
          <p>{education.startDate}</p>
          <p>{education.endDate}</p>
        </div>
      ))}
    </div>
  );
}

function Education() {
  const [education, setEducation] = useState<EducationObject>({
    id: "",
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: "",
  });
  const [educationList, setEducationList] = useState<EducationObject[]>([]);

  function handleChange(key: keyof EducationObject, value: string) {
    setEducation((prevEducation) => ({ ...prevEducation, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newEducation = {
      ...education,
      id: crypto.randomUUID(),
    };

    setEducationList((prevEducationList) => [
      ...prevEducationList,
      newEducation,
    ]);

    setEducation({
      id: "",
      schoolName: "",
      degree: "",
      startDate: "",
      endDate: "",
    });
  }

  return (
    <div>
      <h2>Education</h2>
      <InputEducation
        education={education}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <OutputEducation educationList={educationList} />
    </div>
  );
}

export default Education;
