import type { EducationObject } from "./Education";
import DynamicForm from "../utilities/DynamicForm";
import type { FieldConfig } from "../utilities/DynamicForm";

interface InputEducationProps {
  education: EducationObject;
  handleInput: (key: keyof EducationObject, value: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  resetInputForm: () => void;
  handleDelete: (id: string) => void;
}

function InputEducation({
  education,
  handleInput,
  handleSubmit,
  resetInputForm,
  handleDelete,
}: InputEducationProps) {
  const educationField: FieldConfig[] = [
    { keyName: "schoolName", label: "School Name", required: true },
    { keyName: "degree", label: "Degree", required: true },
    { keyName: "startDate", label: "Start Date" },
    { keyName: "endDate", label: "End Date" },
  ];

  return (
    <DynamicForm
      formData={education}
      fields={educationField}
      onChange={handleInput}
      onSubmit={handleSubmit}
      onCancel={resetInputForm}
      showCancel={!!education.id}
      onDelete={handleDelete}
    />
  );
}

export default InputEducation;
