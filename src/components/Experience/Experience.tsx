import { useState, type Dispatch, type SetStateAction } from "react";
import InputExperience from "./InputExperience";
import ExperienceList from "./ExperienceList";

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
}

function Experience({ experienceList, setExperienceList }: ExperienceProps) {
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

  return (
    <div>
      <h2>Experience</h2>
      <InputExperience
        experience={experience}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        resetInputForm={resetInputForm}
      />

      <ExperienceList
        experienceList={experienceList}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Experience;
export type { ExperienceObject };
