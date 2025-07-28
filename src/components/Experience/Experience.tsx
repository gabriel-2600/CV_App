import { useState, type Dispatch, type SetStateAction } from "react";
import InputExperience from "./InputExperience";
import DynamicList from "../utilities/DynamicList";

interface ExperienceObject {
  id: string;
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
}

interface ExperienceProps {
  experienceList: ExperienceObject[];
  setExperienceList: Dispatch<SetStateAction<ExperienceObject[]>>;
  displayNumber: number;
  setDisplayNumber: Dispatch<SetStateAction<number>>;
}

function Experience({
  experienceList,
  setExperienceList,
  displayNumber,
  setDisplayNumber,
}: ExperienceProps) {
  const [experience, setExperience] = useState<ExperienceObject>({
    id: "",
    companyName: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
    location: "",
  });

  function resetInputForm() {
    setExperience({
      id: "",
      companyName: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
      location: "",
    });
  }

  function handleInput(key: keyof ExperienceObject, value: string) {
    setExperience((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (experience.id) {
      setExperienceList((prev: ExperienceObject[]) =>
        prev.map((item) =>
          item.id === experience.id ? { ...item, ...experience } : item
        )
      );
    } else {
      setExperienceList((prev: ExperienceObject[]) => [
        ...prev,
        { ...experience, id: crypto.randomUUID() },
      ]);
    }

    resetInputForm();
  }

  function handleEdit(id: string) {
    const item = experienceList.find((e) => e.id === id);
    if (!item) return;
    setExperience(item);
  }

  function handleDelete(id: string) {
    const updatedEducationList = experienceList.filter(
      (item) => item.id !== id
    );

    setExperienceList(updatedEducationList);
    resetInputForm();
  }

  function changeDisplay(): void {
    if (displayNumber === 0) {
      setDisplayNumber(4);
    } else {
      setDisplayNumber(0);
    }
  }

  return (
    <div className="bg-white p-5 rounded-lg ">
      <div className="flex justify-between ">
        <h2 className="font-bold text-[25px]">Experience</h2>
        <button
          className="px-3  rounded-md  bg-[#d9dae3]"
          onClick={changeDisplay}
        >
          ^
        </button>
      </div>

      <div>
        <InputExperience
          experience={experience}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          resetInputForm={resetInputForm}
          handleDelete={handleDelete}
        />

        <DynamicList
          list={experienceList}
          listKey="companyName"
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default Experience;
export type { ExperienceObject };
