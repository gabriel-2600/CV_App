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
    fullName: "Gabriel Molina",
    email: "gabrielmolina8123@gmail.com",
    phoneNumber: "09760957997",
    address: "Baguio City, Philippines",
  });
  const [educationList, setEducationList] = useState<EducationObject[]>([
    {
      id: "12345678",
      schoolName: "Saint Louis University",
      degree: "Bachelor of Science in Information Technology",
      startDate: "2021",
      endDate: "2025",
    },
  ]);
  const [experienceList, setExperienceList] = useState<ExperienceObject[]>([
    {
      id: "87654321",
      companyName: "Knowles Training Insitute",
      position: "Website Administrator Intern",
      startDate: "January 2025",
      endDate: "May 2025",
      description:
        "Developed Corporate Courses web pages for Cambodia using Elementor in WordPress, allowing users to access and enroll Knowles’ training programs. Performed quality assurance by reviewing assigned web pages, identifying UI/UX issues, and ensuring accurate documentation. Maintained WordPress websites by updating plugins and migrating Contact Form 7 forms to WPForms, ensuring reliable email and inquiry submissions for corporate courses",
      location: "Singapore",
    },
  ]);
  const [skillsList, setSkillsList] = useState<SkillsObject[]>([
    {
      id: "1",
      skillName: "HTML",
    },
    {
      id: "2",
      skillName: "CSS",
    },
    {
      id: "3",
      skillName: "JavaScript",
    },
    {
      id: "5",
      skillName: "React",
    },
    {
      id: "6",
      skillName: "TypeScript",
    },
    {
      id: "7",
      skillName: "Node.js",
    },
    {
      id: "8",
      skillName: "Java",
    },
    {
      id: "9",
      skillName: "MySQL",
    },
    {
      id: "10",
      skillName: "Tailwind",
    },
  ]);

  return (
    <main className="flex p-[40px] gap-[20px]">
      <section className="flex flex-col flex-1 gap-[20px]">
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
      </section>

      <section className="w-[850px] flex-initial">
        <div className=" bg-white border-1 border-gray-300 p-[60px] h-[1176px]  flex flex-col">
          <DisplayResume
            details={details}
            experienceList={experienceList}
            educationList={educationList}
            skillsList={skillsList}
            // p-[60px] w-[936px] h-[1176px]
          />
        </div>
      </section>
    </main>
  );
}

export default Resume;
