import { useState } from "react";

import PersonalDetails from "./components/PersonalDetails/PersonalDetails.tsx";
import Education from "./components/Education/Education.tsx";
import Experience from "./components/Experience/Experience.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Resume from "./components/Resume/Resume.tsx";

import type { PersonalDetailsObject } from "./components/PersonalDetails/PersonalDetails.tsx";
import type { EducationObject } from "./components/Education/Education.tsx";
import type { ExperienceObject } from "./components/Experience/Experience.tsx";
import type { SkillsObject } from "./components/Skills/Skills.tsx";

import "./App.css";

function App() {
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
      <Resume
        details={details}
        educationList={educationList}
        experienceList={experienceList}
        skillsList={skillsList}
      />
    </div>
  );
}

export default App;
