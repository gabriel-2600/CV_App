import OutputPersonalDetails from "./OutputPersonalDetails.tsx";
import DisplayList from "./DisplayList.tsx";

import type { PersonalDetailsObject } from "../PersonalDetails/PersonalDetails.tsx";
import type { EducationObject } from "../Education/Education.tsx";
import type { ExperienceObject } from "../Experience/Experience.tsx";
import type { SkillsObject } from "../Skills/Skills.tsx";

interface DisplayResumeProps {
  details: PersonalDetailsObject;
  educationList: EducationObject[];
  experienceList: ExperienceObject[];
  skillsList: SkillsObject[];
}

function DisplayResume({
  details,
  educationList,
  experienceList,
  skillsList,
}: DisplayResumeProps) {
  return (
    <>
      <OutputPersonalDetails details={details} />

      <DisplayList
        label="EXPERIENCE"
        list={experienceList}
        renderItem={(item) => (
          <>
            <div className="flex justify-between">
              <p className="font-bold">{item.position} </p>
              <p>
                {item.startDate} - {item.endDate}
              </p>
            </div>
            <div className="flex justify-between mb-1">
              <p>{item.companyName}</p>
              <p>{item.location}</p>
            </div>
            <div>
              <p>{item.description}</p>
            </div>
          </>
        )}
      />
      <DisplayList
        label="EDUCATION"
        list={educationList}
        renderItem={(item) => (
          <>
            <div className="flex justify-between ">
              <p className="font-bold">{item.schoolName}</p>
              <p>
                {item.startDate} - {item.endDate}
              </p>
            </div>
            <div>
              <p>{item.degree}</p>
            </div>
          </>
        )}
      />

      <DisplayList
        label="SKILLS"
        list={skillsList}
        optionalstyle="flex"
        renderItem={(item, index) => (
          <>
            <p>
              {item.skillName}
              {skillsList.length - 1 !== index && ",\u00A0"}
            </p>
          </>
        )}
      />
    </>
  );
}

export default DisplayResume;
