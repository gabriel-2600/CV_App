import type { SkillsObject } from "./Skills";

interface SkillsListProps {
  skillsList: SkillsObject[];
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
}

function SkillsList({ skillsList, handleEdit, handleDelete }: SkillsListProps) {
  return (
    <div>
      {skillsList.map((skill) => (
        <div key={skill.id} id={skill.id}>
          <p onClick={() => handleEdit(skill.id)}> {skill.skillName} </p>

          <button type="button" onClick={() => handleDelete(skill.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default SkillsList;
