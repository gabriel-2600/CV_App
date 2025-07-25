import type { EducationObject } from "./Education";

interface EducationListProps {
  educationList: EducationObject[];
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
}

function EducationList({
  educationList,
  handleEdit,
  handleDelete,
}: EducationListProps) {
  return (
    <div>
      {educationList.map((education) => (
        <div key={education.id} id={education.id}>
          <p onClick={() => handleEdit(education.id)}>{education.schoolName}</p>

          <button type="button" onClick={() => handleDelete(education.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default EducationList;
