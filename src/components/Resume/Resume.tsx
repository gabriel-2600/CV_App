import { useState } from "react";

import PersonalDetails, {
  type PersonalDetailsObject,
} from "../PersonalDetails/PersonalDetails.tsx";
import Education, { type EducationObject } from "../Education/Education.tsx";
import Experience, {
  type ExperienceObject,
} from "../Experience/Experience.tsx";
import Skills, { type SkillsObject } from "../Skills/Skills.tsx";
import DisplayResume from "./DisplayResume.tsx";

function Resume() {
  const [details, setDetails] = useState<PersonalDetailsObject>({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const [educationList, setEducationList] = useState<EducationObject[]>([]);
  const [experienceList, setExperienceList] = useState<ExperienceObject[]>([]);
  const [skillsList, setSkillsList] = useState<SkillsObject[]>([]);

  return (
    <div>
      <PersonalDetails details={details} setDetails={setDetails} />
      <Education
        educationList={educationList}
        setEducationList={setEducationList}
      />
      <Experience
        experienceList={experienceList}
        setExperienceList={setExperienceList}
      />
      <Skills skillsList={skillsList} setSkillsList={setSkillsList} />
      <DisplayResume
        details={details}
        educationList={educationList}
        experienceList={experienceList}
        skillsList={skillsList}
      />
    </div>
  );
}

export default Resume;
