import type { SkillsObject } from "./Skills";
import DynamicForm from "../DynamicForm";
import type { FieldConfig } from "../DynamicForm";

interface InputSkillsProps {
  skills: SkillsObject;
  handleInput: (key: keyof SkillsObject, value: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  resetInputForm: () => void;
}

function InputSkills({
  skills,
  handleInput,
  handleSubmit,
  resetInputForm,
}: InputSkillsProps) {
  const skillsField: FieldConfig[] = [
    { keyName: "skillName", label: "Skill", required: true },
  ];

  return (
    <DynamicForm
      formData={skills}
      fields={skillsField}
      onChange={handleInput}
      onSubmit={handleSubmit}
      onCancel={resetInputForm}
      showCancel={!!skills.id}
    />
  );
}

export default InputSkills;
