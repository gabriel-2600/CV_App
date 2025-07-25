import { useState } from "react";
import InputSkills from "./InputSkills";
import SkillsList from "./SkillsList";

interface SkillsObject {
  id: string;
  skillName: string;
}

interface SkillsProps {
  skillsList: SkillsObject[];
  setSkillsList: (arg0: unknown) => void;
}

function Skills({ skillsList, setSkillsList }: SkillsProps) {
  const [skill, setSkill] = useState<SkillsObject>({
    id: "",
    skillName: "",
  });
  // const [skillsList, setSkillsList] = useState<SkillsObject[]>([]);

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
    <div>
      <h2>Skills</h2>
      <InputSkills
        skills={skill}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        resetInputForm={resetInputForm}
      />

      <SkillsList
        skillsList={skillsList}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Skills;
export type { SkillsObject };
