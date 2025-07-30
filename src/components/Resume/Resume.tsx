import { useState } from "react";
import React from "react";
import html2canvas from "html2canvas";

import PersonalDetails, {
  type PersonalDetailsObject,
} from "../PersonalDetails/PersonalDetails.tsx";
import Education, { type EducationObject } from "../Education/Education.tsx";
import Experience, {
  type ExperienceObject,
} from "../Experience/Experience.tsx";
import Skills, { type SkillsObject } from "../Skills/Skills.tsx";
import DisplayResume from "./DisplayResume.tsx";
import SectionHeader from "../utilities/SectionHeader.tsx";

import down from "../../assets/down.png";
import jsPDF from "jspdf";

function Resume() {
  const [details, setDetails] = useState<PersonalDetailsObject>({
    fullName: "Juan Dela Cruz",
    email: "juandelacruz@email.com",
    phoneNumber: "12345678",
    address: "City, Country",
  });
  const [educationList, setEducationList] = useState<EducationObject[]>([
    {
      id: "12345678",
      schoolName: "University",
      degree: "Bachelor of Science in Information Technology",
      startDate: "2021",
      endDate: "2025",
    },
  ]);
  const [experienceList, setExperienceList] = useState<ExperienceObject[]>([
    {
      id: "87654321",
      companyName: "Company Name",
      position: "Software Engineer",
      startDate: "January 2025",
      endDate: "May 2025",
      description:
        "Outlines responsibilities related to designing, developing, testing, and maintaining software applications, often involving collaboration with various teams and adhering to the software development lifecycle",
      location: "Location",
    },
  ]);
  const [skillsList, setSkillsList] = useState<SkillsObject[]>([
    {
      id: "1",
      skillName: "React",
    },
    {
      id: "2",
      skillName: "TypeScript",
    },
    {
      id: "3",
      skillName: "Tailwind",
    },
  ]);

  const [displayNumber, setDisplayNumber] = useState(4);
  const printRef = React.useRef(null);

  const handleDownloadPDF = async () => {
    const element = printRef.current;

    if (!element) return;

    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });

    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    console.log(pdfWidth);
    console.log(pdfHeight);

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("harvard-template.pdf");
  };

  return (
    <main className="flex p-[20px] gap-[20px] max-[1025px]:flex-col m">
      <section className="flex flex-col  flex-1  gap-[20px]">
        <PersonalDetails details={details} setDetails={setDetails} />

        {displayNumber === 0 ? (
          <Experience
            experienceList={experienceList}
            setExperienceList={setExperienceList}
            displayNumber={displayNumber}
            setDisplayNumber={setDisplayNumber}
          />
        ) : (
          <div className="bg-white p-5 rounded-lg ">
            <SectionHeader
              label="Experience"
              number={0}
              image={down}
              displayNumber={displayNumber}
              setDisplayNumber={setDisplayNumber}
            />
          </div>
        )}

        {displayNumber === 1 ? (
          <Education
            educationList={educationList}
            setEducationList={setEducationList}
            displayNumber={displayNumber}
            setDisplayNumber={setDisplayNumber}
          />
        ) : (
          <div className="bg-white p-5 rounded-lg ">
            <SectionHeader
              label="Education"
              number={1}
              image={down}
              displayNumber={displayNumber}
              setDisplayNumber={setDisplayNumber}
            />
          </div>
        )}

        {displayNumber === 2 ? (
          <Skills
            skillsList={skillsList}
            setSkillsList={setSkillsList}
            displayNumber={displayNumber}
            setDisplayNumber={setDisplayNumber}
          />
        ) : (
          <div className="bg-white p-5 rounded-lg ">
            <SectionHeader
              label="Skills"
              number={2}
              image={down}
              displayNumber={displayNumber}
              setDisplayNumber={setDisplayNumber}
            />
          </div>
        )}

        <button
          className="rounded-md flex justify-center items-centerd p-2 bg-[#1c1c84] text-white font-semibold max-w-[250px]"
          onClick={handleDownloadPDF}
        >
          Download Resume (PDF)
        </button>
      </section>

      <section className="flex flex-col items-center max-w-[850px] max-[1025px]:self-center">
        <div className=" bg-white py-[20px] px-[60px] h-[1180px]  flex flex-col ">
          <DisplayResume
            details={details}
            experienceList={experienceList}
            educationList={educationList}
            skillsList={skillsList}
          />
        </div>

        <p className="text-gray-600 pt-2">Resume can only be one page</p>
      </section>

      <div style={{ position: "absolute", top: "-9999px", left: "-9999px" }}>
        <div
          ref={printRef}
          style={{
            width: "850px",
            height: "1180px",
            padding: "20px 60px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <DisplayResume
            details={details}
            experienceList={experienceList}
            educationList={educationList}
            skillsList={skillsList}
          />
        </div>
      </div>
    </main>
  );
}

export default Resume;
