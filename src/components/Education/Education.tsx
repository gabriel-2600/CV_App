import { useState } from "react";
import InputEducation from "./InputEducation";
import EducationList from "./EducationList";

interface EducationObject {
  id: string;
  schoolName: string;
  degree: string;
  startDate: string;
  endDate: string;
}

interface EducationProps {
  educationList: EducationObject[];
  setEducationList: (arg0: unknown) => void;
}

function Education({ educationList, setEducationList }: EducationProps) {
  const [education, setEducation] = useState<EducationObject>({
    id: "",
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: "",
  });
  // const [educationList, setEducationList] = useState<EducationObject[]>([]);

  function resetInputForm() {
    setEducation({
      id: "",
      schoolName: "",
      degree: "",
      startDate: "",
      endDate: "",
    });
  }

  function handleInput(key: keyof EducationObject, value: string) {
    setEducation((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (education.id) {
      setEducationList((prev: EducationObject[]) =>
        prev.map((item: { id: string }) =>
          item.id === education.id ? { ...item, ...education } : item
        )
      );
    } else {
      setEducationList((prev: EducationObject[]) => [
        ...prev,
        { ...education, id: crypto.randomUUID() },
      ]);
    }

    resetInputForm();
  }

  function handleEdit(id: string) {
    const item = educationList.find((e) => e.id === id);
    if (!item) return;
    setEducation(item);
  }

  function handleDelete(id: string) {
    const updatedEducationList = educationList.filter((item) => item.id !== id);

    setEducationList(updatedEducationList);
    resetInputForm();
  }

  return (
    <div>
      <h2>Education</h2>
      <InputEducation
        education={education}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        resetInputForm={resetInputForm}
      />
      <EducationList
        educationList={educationList}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Education;
export type { EducationObject };
