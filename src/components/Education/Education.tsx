import { useState, type Dispatch, type SetStateAction } from "react";
import InputEducation from "./InputEducation";
import DynamicList from "../utilities/DynamicList";
import SectionHeader from "../utilities/SectionHeader";
import up from "../../assets/up.png";

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
  displayNumber: number;
  setDisplayNumber: Dispatch<SetStateAction<number>>;
}

function Education({
  educationList,
  setEducationList,
  displayNumber,
  setDisplayNumber,
}: EducationProps) {
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

  function handleInput(key: keyof EducationObject, value: string): void {
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

  function handleEdit(id: string): void {
    const item = educationList.find((e) => e.id === id);
    if (!item) return;
    setEducation(item);
  }

  function handleDelete(id: string): void {
    const updatedEducationList = educationList.filter((item) => item.id !== id);

    setEducationList(updatedEducationList);
    resetInputForm();
  }

  return (
    <div className="bg-white p-5 rounded-lg ">
      <SectionHeader
        label="Education"
        number={1}
        image={up}
        displayNumber={displayNumber}
        setDisplayNumber={setDisplayNumber}
      />

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
