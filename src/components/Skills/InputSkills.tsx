import type { SkillsObject } from "./Skills";
import DynamicForm from "../utilities/DynamicForm";
import type { FieldConfig } from "../utilities/DynamicForm";

interface InputSkillsProps {
  skills: SkillsObject;
  handleInput: (key: keyof SkillsObject, value: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  resetInputForm: () => void;
  handleDelete: (id: string) => void;
}

function InputSkills({
  skills,
  handleInput,
  handleSubmit,
  resetInputForm,
  handleDelete,
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
      onDelete={handleDelete}
    />
  );
}

export default InputSkills;
