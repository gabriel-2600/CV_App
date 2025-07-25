import type { ExperienceObject } from "./Experience";
import DynamicForm from "../DynamicForm";
import type { FieldConfig } from "../DynamicForm";

interface InputExperienceProps {
  experience: ExperienceObject;
  handleInput: (key: keyof ExperienceObject, value: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  resetInputForm: () => void;
}

function InputExperience({
  experience,
  handleInput,
  handleSubmit,
  resetInputForm,
}: InputExperienceProps) {
  const experienceField: FieldConfig[] = [
    { keyName: "companyName", label: "Company Name", required: true },
    { keyName: "position", label: "Position Title", required: true },
    { keyName: "startDate", label: "Start Date" },
    { keyName: "endDate", label: "End Date" },
    { keyName: "description", label: "Description" },
    { keyName: "location", label: "Location" },
  ];

  return (
    <DynamicForm
      formData={experience}
      fields={experienceField}
      onChange={handleInput}
      onSubmit={handleSubmit}
      onCancel={resetInputForm}
      showCancel={!!experience.id}
    />
  );
}

export default InputExperience;
