import OutputPersonalDetails from "./OutputPersonalDetails.tsx";
import DisplayList from "./DisplayList.tsx";

import type { PersonalDetailsObject } from "../PersonalDetails/PersonalDetails.tsx";
import type { EducationObject } from "../Education/Education.tsx";
import type { ExperienceObject } from "../Experience/Experience.tsx";
import type { SkillsObject } from "../Skills/Skills.tsx";

interface ResumeProps {
  details: PersonalDetailsObject;
  educationList: EducationObject[];
  experienceList: ExperienceObject[];
  skillsList: SkillsObject[];
}

function Resume({
  details,
  educationList,
  experienceList,
  skillsList,
}: ResumeProps) {
  const educationKeys: (keyof EducationObject)[] = [
    "schoolName",
    "degree",
    "startDate",
    "endDate",
  ];

  const experienceKeys: (keyof ExperienceObject)[] = [
    "companyName",
    "position",
    "startDate",
    "endDate",
    "description",
    "location",
  ];

  const skillKeys: (keyof SkillsObject)[] = ["skillName"];

  return (
    <div className="resume-container">
      <OutputPersonalDetails details={details} />
      <DisplayList list={educationList} listKeys={educationKeys} />
      <DisplayList list={experienceList} listKeys={experienceKeys} />
      <DisplayList list={skillsList} listKeys={skillKeys} />
    </div>
  );
}

export default Resume;
