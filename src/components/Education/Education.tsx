import { useState, type Dispatch, type SetStateAction } from "react";
import InputEducation from "./InputEducation";
import DynamicList from "../DynamicList";

interface EducationObject {
  id: string;
  schoolName: string;
  degree: string;
  startDate: string;
  endDate: string;
}

interface EducationProps {
  educationList: EducationObject[];
  setEducationList: Dispatch<SetStateAction<EducationObject[]>>;
}

function Education({ educationList, setEducationList }: EducationProps) {
  const [education, setEducation] = useState<EducationObject>({
    id: "",
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: "",
  });

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
      setEducationList((prev) =>
        prev.map((item) =>
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
    <div className="bg-white p-5 rounded-lg ">
      <h2 className="font-bold text-[25px]">Education</h2>
      <InputEducation
        education={education}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        resetInputForm={resetInputForm}
        handleDelete={handleDelete}
      />

      <DynamicList
        list={educationList}
        listKey="schoolName"
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default Education;
export type { EducationObject };
