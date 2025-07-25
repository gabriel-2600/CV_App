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
    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <div>
    //       <label>School Name: </label>
    //       <input
    //         type="text"
    //         required
    //         value={education.schoolName}
    //         onChange={(event) => handleInput("schoolName", event.target.value)}
    //       />
    //     </div>

    //     <div>
    //       <label>Degree: </label>
    //       <input
    //         type="text"
    //         required
    //         value={education.degree}
    //         onChange={(event) => handleInput("degree", event.target.value)}
    //       />
    //     </div>

    //     <div>
    //       <label>Start Date: </label>
    //       <input
    //         type="text"
    //         value={education.startDate}
    //         onChange={(event) => handleInput("startDate", event.target.value)}
    //       />
    //     </div>

    //     <div>
    //       <label>End Date: </label>
    //       <input
    //         type="text"
    //         value={education.endDate}
    //         onChange={(event) => handleInput("endDate", event.target.value)}
    //       />
    //     </div>
    //   </div>
    //   <button type="submit">Save</button>
    //   {education.id && (
    //     <button type="button" onClick={resetInputForm}>
    //       Cancel Edit
    //     </button>
    //   )}
    // </form>
  );
}

export default InputEducation;
