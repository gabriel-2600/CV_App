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
    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <div>
    //       <label>Company Name: </label>
    //       <input
    //         type="text"
    //         required
    //         value={experience.companyName}
    //         onChange={(event) => handleInput("companyName", event.target.value)}
    //       />
    //     </div>

    //     <div>
    //       <label>Position Title: </label>
    //       <input
    //         type="text"
    //         required
    //         value={experience.position}
    //         onChange={(event) => handleInput("position", event.target.value)}
    //       />
    //     </div>

    //     <div>
    //       <label>Start Date: </label>
    //       <input
    //         type="text"
    //         value={experience.startDate}
    //         onChange={(event) => handleInput("startDate", event.target.value)}
    //       />
    //     </div>

    //     <div>
    //       <label>End Date: </label>
    //       <input
    //         type="text"
    //         value={experience.endDate}
    //         onChange={(event) => handleInput("endDate", event.target.value)}
    //       />
    //     </div>

    //     <div>
    //       <label>Description: </label>
    //       <input
    //         type="text"
    //         value={experience.description}
    //         onChange={(event) => handleInput("description", event.target.value)}
    //       />
    //     </div>

    //     <div>
    //       <label>Location: </label>
    //       <input
    //         type="text"
    //         value={experience.location}
    //         onChange={(event) => handleInput("location", event.target.value)}
    //       />
    //     </div>
    //   </div>
    //   <button type="submit">Save</button>
    //   {experience.id && (
    //     <button type="button" onClick={resetInputForm}>
    //       Cancel Edit
    //     </button>
    //   )}
    // </form>
  );
}

export default InputExperience;
