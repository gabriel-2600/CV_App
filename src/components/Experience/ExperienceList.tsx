import type { ExperienceObject } from "./Experience";

interface ExperienceListProps {
  experienceList: ExperienceObject[];
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
}

function ExperienceList({
  experienceList,
  handleEdit,
  handleDelete,
}: ExperienceListProps) {
  return (
    <div>
      {experienceList.map((experience) => (
        <div key={experience.id} id={experience.id}>
          <p onClick={() => handleEdit(experience.id)}>
            {" "}
            {experience.companyName}{" "}
          </p>

          <button type="button" onClick={() => handleDelete(experience.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ExperienceList;
