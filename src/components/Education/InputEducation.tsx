import type { EducationObject } from "./Education";
import DynamicForm from "../DynamicForm";
import type { FieldConfig } from "../DynamicForm";

interface InputEducationProps {
  education: EducationObject;
  handleInput: (key: keyof EducationObject, value: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  resetInputForm: () => void;
}

function InputEducation({
  education,
  handleInput,
  handleSubmit,
  resetInputForm,
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
    />
  );
}

export default InputEducation;
