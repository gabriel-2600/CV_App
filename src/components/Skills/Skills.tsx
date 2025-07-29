import { useState, type Dispatch, type SetStateAction } from "react";
import InputSkills from "./InputSkills";
import DynamicList from "../utilities/DynamicList";
import SectionHeader from "../utilities/SectionHeader";
import up from "../../assets/up.png";

interface SkillsObject {
  id: string;
  skillName: string;
}

interface SkillsProps {
  skillsList: SkillsObject[];
  setSkillsList: Dispatch<SetStateAction<SkillsObject[]>>;
  displayNumber: number;
  setDisplayNumber: Dispatch<SetStateAction<number>>;
}

function Skills({
  skillsList,
  setSkillsList,
  displayNumber,
  setDisplayNumber,
}: SkillsProps) {
  const [skill, setSkill] = useState<SkillsObject>({
    id: "",
    skillName: "",
  });

  function resetInputForm() {
    setSkill({
      id: "",
      skillName: "",
    });
  }

  function handleInput(key: keyof SkillsObject, value: string) {
    setSkill((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (skill.id) {
      setSkillsList((prev: SkillsObject[]) =>
        prev.map((item) =>
          item.id === skill.id ? { ...item, ...skill } : item
        )
      );
    } else {
      setSkillsList((prev: SkillsObject[]) => [
        ...prev,
        { ...skill, id: crypto.randomUUID() },
      ]);
    }

    resetInputForm();
  }

  function handleEdit(id: string) {
    const item = skillsList.find((e) => e.id === id);
    if (!item) return;
    setSkill(item);
  }

  function handleDelete(id: string) {
    const updatedEducationList = skillsList.filter((item) => item.id !== id);

    setSkillsList(updatedEducationList);
    resetInputForm();
  }

  return (
    <>
      <div className="bg-white p-5 rounded-lg ">
        <SectionHeader
          label="Skills"
          number={2}
          image={up}
          displayNumber={displayNumber}
          setDisplayNumber={setDisplayNumber}
        />

        <InputSkills
          skills={skill}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          resetInputForm={resetInputForm}
          handleDelete={handleDelete}
        />

        <DynamicList
          list={skillsList}
          listKey="skillName"
          handleEdit={handleEdit}
        />
      </div>
    </>
  );
}

export default Skills;
export type { SkillsObject };
