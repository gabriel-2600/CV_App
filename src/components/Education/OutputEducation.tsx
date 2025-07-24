import type { EducationObject } from "./Education";

interface OutputEducationProps {
  educationList: EducationObject[];
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
}

function OutputEducation({
  educationList,
  handleEdit,
  handleDelete,
}: OutputEducationProps) {
  return (
    <div>
      {educationList.map((education) => (
        <div key={education.id} id={education.id}>
          <p onClick={() => handleEdit(education.id)}>
            {" "}
            {education.schoolName}{" "}
          </p>

          <button type="button" onClick={() => handleDelete(education.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default OutputEducation;
